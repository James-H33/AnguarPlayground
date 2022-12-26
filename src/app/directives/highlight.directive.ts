import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: "[appHighlight]",
  standalone: true
})
export class HighlightDirective {
  @Input()
  public set defaultColor(color: string) {
    this._defaultColor = color;
    this.highlight(color);
  }

  private _defaultColor = 'red';

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight('red');
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(this._defaultColor);
  }

  constructor(
    private elementRef: ElementRef
  ) {
    this.highlight(this._defaultColor);
  }

  public highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
