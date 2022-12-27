import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightAndUnderlineDirective } from './directives/highlight-and-underline.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { LazyRenderDirective } from './directives/lazy-render.directive';
import { OutsideClickDirective } from './directives/outside-click.directive';
import { UnderlineDirective } from './directives/underline.directive';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    HighlightDirective,
    OutsideClickDirective,
    LazyRenderDirective,
    UnderlineDirective,
    HighlightAndUnderlineDirective,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
