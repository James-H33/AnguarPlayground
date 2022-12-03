import { AfterViewInit, ContentChild, Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { first, map } from "rxjs";
import { LazyRenderService } from "../services/lazy-render.service";

@Directive({
  selector: "[appLazyRender]",
  standalone: true
})
export class LazyRenderDirective implements AfterViewInit {
  @ContentChild(TemplateRef)
  public lazyRenderTemplate?: TemplateRef<any>;

  /*
    Window will be used as the parent.
  */

  public isRendered = false;

  constructor(
    private elementRef: ElementRef,
    private viewContainer: ViewContainerRef,
    private lazyRenderService: LazyRenderService
  ) { }

  public ngAfterViewInit() {
    this.lazyRenderService.watch()
      .pipe(
        map((entries) => {
          const id = this.elementRef.nativeElement.getAttribute('data-id');

          return entries[id];
        }),
        first((isVisible: boolean) => isVisible)
      )
      .subscribe((isVisible: boolean) => {
        if (!isVisible || this.isRendered) {
          return;
        }

        this.isRendered = true;
        this.viewContainer.clear();
        this.viewContainer.createComponent(this.lazyRenderTemplate as any);
        this.lazyRenderService.unobserve(this.elementRef.nativeElement);
      });

    this.lazyRenderService.observe(this.elementRef.nativeElement);
  }
}
