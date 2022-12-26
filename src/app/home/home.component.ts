import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1 appHighlight appUnderline defaultColor="green">
      Angular Playground
    </h1>

    <h1 appHighlightAndUnderline defaultColor="green">
      Angular Playground
    </h1>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }
