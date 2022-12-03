import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { LazyForDirective } from './directives/lazy-for.directive';
import { LazyRenderDirective } from './directives/lazy-render.directive';
import { OutsideClickDirective } from './directives/outside-click.directive';
import { LazyForExampleComponent } from './lazy-for-example/lazy-for-example.component';
import { LazyComponent } from './lazy/lazy.component';
import { LazyRenderComponent } from './lazy-render/lazy-render.component';

@NgModule({
  declarations: [	
    AppComponent,
    LazyForDirective,
    LazyForExampleComponent,
    LazyComponent,
      LazyRenderComponent
   ],
  imports: [
    BrowserModule,
    HighlightDirective,
    OutsideClickDirective,
    LazyRenderDirective,
    AppRoutingModule
  ],
  providers: [
    LazyForDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
