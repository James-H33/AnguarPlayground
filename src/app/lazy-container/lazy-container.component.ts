import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { LazyComponent } from "./lazy/lazy.component";
import { LazyForExampleComponent } from "./lazy-for-example/lazy-for-example.component";

@Component({
  selector: 'app-lazy-container',
  template: `
    <div class="lazy-container">
      <app-lazy-for-example></app-lazy-for-example>

      <div class="app-content">
        <div appLazyRender data-id="123">
          <ng-template>
            <app-lazy></app-lazy>
          </ng-template>
        </div>
      </div>

      <div class="app-content">
        <div appLazyRender data-id="12333">
          <ng-template>
            <app-lazy></app-lazy>
          </ng-template>
        </div>
      </div>

      <div class="app-content">
        <div appLazyRender data-id="124433">
          <ng-template>
            <app-lazy></app-lazy>
          </ng-template>
        </div>
      </div>

      <div appLazyRender data-id="2323">
        <ng-template>
          <app-lazy-for-example></app-lazy-for-example>
        </ng-template>
      </div>

    </div>
  `,
  standalone: true,
  imports: [
    CommonModule,
    LazyComponent,
    LazyForExampleComponent
  ]
})
export class LazyContainerComponent { }
