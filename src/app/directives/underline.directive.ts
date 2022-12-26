import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appUnderline]",
  standalone: true
})
export class UnderlineDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('mouseenter') mouseEnter() {
    this.elementRef.nativeElement.style.textDecoration = 'underline';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.elementRef.nativeElement.style.textDecoration = 'none';
  }
}
