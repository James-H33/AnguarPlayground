import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isActive = true;

  public closeArea() {
    console.log('closeArea');
    this.isActive = false;
  }

  public setToActive() {
    this.isActive = true;
  }

  public doStuff = this.debounce(1000, () => {
    console.log('Hello World!');
  });

  public logWindowSize = this.rateLimit(50, () => {
    console.log('Window Resize');
  });

  public ngOnInit() {
    window.addEventListener('resize', () => {
      this.logWindowSize();
    });
  }

  public debounce(delay: number, fn: () => void) {
    let timer: any = null;

    return () => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        fn();
      }, delay);
    };
  }

  public rateLimit(rate: number, fn: any) {
    let tick = rate;

    return () => {
      console.log(tick);
      tick--;

      if (tick <= 0) {
        tick = rate;
        fn();
      }
    };
  }
}
