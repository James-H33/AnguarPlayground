import { Directive, DoCheck, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[lazyFor]',
  standalone: true
})
export class LazyForDirective implements OnInit, DoCheck {
  @Input()
  set lazyForOf(list: any[]) {
    this.list = list;
  }

  private list: any[] = [];

  public parentElement!: HTMLElement;
  public hostElement!: HTMLElement;
  public isFirstRender = true;

  private beforeListElement!: HTMLElement;
  private afterListElement!: HTMLElement;
  private itemHeight: number = 0;

  constructor(
    private vcr: ViewContainerRef,
    private hostRef: ElementRef,
    private tpl: TemplateRef<any>,
  ) { }

  public ngOnInit() {
    this.hostElement = this.hostRef.nativeElement;
    this.parentElement = this.hostElement.parentElement as any;

    //Adding an event listener will trigger ngDoCheck whenever the event fires so we don't actually need to call
    //update here.
    this.parentElement.addEventListener('scroll', (e: any) => {});
  }

  public ngDoCheck() {
    if (this.list.length === 0) {
      this.vcr.clear();
      return;
    }

    if (this.isFirstRender) {
      this.initialize();
    }

    let listHeight = this.parentElement.clientHeight;
    let scrollTop = this.parentElement.scrollTop;

    // This gets the padding or margin that might be between the parent and the host element.
    const viewHeight =
      (this.beforeListElement.getBoundingClientRect().top) -
      (this.parentElement.getBoundingClientRect().top - scrollTop);

    let listStartI = Math.floor((scrollTop - viewHeight) / this.itemHeight);
    listStartI = this.limitToRange(listStartI, 0, this.list.length - 1);

    let listEndI = Math.ceil((scrollTop - viewHeight + listHeight) / this.itemHeight);
    listEndI = this.limitToRange(listEndI, 0, this.list.length - 1);

    this.vcr.clear();

    this.render(listStartI, listEndI);

    this.beforeListElement.style.height = `${listStartI * this.itemHeight}px`;
    this.afterListElement.style.height = `${(this.list.length - listEndI - 1) * this.itemHeight}px`;
  }

  public initialize() {
    this.beforeListElement = document.createElement('div');
    this.beforeListElement.id = 'beforeList';

    this.afterListElement = document.createElement('div');
    this.afterListElement.id = 'afterList';

    this.parentElement.insertBefore(this.beforeListElement, this.hostElement);
    this.parentElement.insertBefore(this.afterListElement, this.hostElement.nextSibling);
    this.itemHeight = this.getHeight();

    this.beforeListElement.style.height = '0px';
    this.afterListElement.style.height = '0px';

    this.isFirstRender = false;
  }

  public render(start: number, end: number) {
    for (let i = start; i < end; i++) {
      this.vcr.createEmbeddedView(this.tpl, {
        $implicit: this.list[i],
        index: i
      });
    }
  }

  private getHeight() {
    this.vcr.createEmbeddedView(this.tpl, {
      $implicit: this.list[0],
      index: 0
    });

    const targetEl = this.parentElement.querySelector('#beforeList')?.nextSibling as HTMLElement;

    const height = targetEl?.getBoundingClientRect().height;

    return height || 0;
  }

  private limitToRange(start: number, min: number, end: number) {
    return Math.max(
      Math.min(start, end),
      min,
    );
  }
}
