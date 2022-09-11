import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyForDirective } from './directives/lazy-for.directive';
import { LazyForExampleComponent } from './lazy-for-example/lazy-for-example.component';

@NgModule({
  declarations: [	
    AppComponent,
    LazyForDirective,
      LazyForExampleComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LazyForDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
