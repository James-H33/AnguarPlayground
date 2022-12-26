import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lazy-render',
  templateUrl: './lazy-render.component.html',
  styleUrls: ['./lazy-render.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class LazyRenderComponent {
  @ViewChild(TemplateRef)
  public templateRef?: TemplateRef<any>;

}
