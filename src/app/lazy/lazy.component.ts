import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {
  public isActive = false;

  public ngOnInit() {
    setTimeout(() => {
      this.isActive = true;
    }, 1000);
  }
}
