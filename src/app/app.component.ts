import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isActive = true;

  public closeArea() {
    console.log('closeArea');
    this.isActive = false;
  }

  public setToActive() {
    this.isActive = true;
  }
}
