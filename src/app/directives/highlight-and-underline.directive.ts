import { Directive } from "@angular/core";
import { HighlightDirective } from "./highlight.directive";
import { UnderlineDirective } from "./underline.directive";

@Directive({
  selector: "[appHighlightAndUnderline]",
  standalone: true,
  hostDirectives: [
    {
      directive: HighlightDirective,
      inputs: [
        'defaultColor'
      ]
    },
    UnderlineDirective
  ]
})
export class HighlightAndUnderlineDirective {
  constructor() { }
}
