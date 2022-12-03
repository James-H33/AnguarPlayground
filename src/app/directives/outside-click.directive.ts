import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appOutsideClick]',
  standalone: true
})
export class OutsideClickDirective {
  @Output()
  public outsideClicked = new EventEmitter();

  public destroy: any;

  constructor(
    private elementRef: ElementRef
  ) {
    this.init();
  }

  public init() {
    const callback = (event: MouseEvent) => {
      const hostElement = this.elementRef.nativeElement;
      const currentElement = event.target as HTMLElement;

      if (currentElement === hostElement || hostElement.contains(currentElement)) {
        return;
      }

      this.outsideClicked.emit();
    }

    const destroy = () => {
      document.removeEventListener('click', callback, true);
    }

    this.destroy = destroy;

    document.addEventListener('click', callback, true);
  }

  public ngOnDestroy() {
    if (this.destroy) {
      this.destroy();
    }
  }
}
