import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snap-and-scroll',
  template: `

    <div class="container">
      <div class="scroll-container">
        <section>
          <h1>Page 1</h1>
        </section>

        <section>
          <h1>Page 2</h1>
        </section>

        <div class="horizontal-scroll-container">
          <section id="corner">
            <h1>Page 3</h1>
          </section>

          <section id="first-horizontal-page">
            <h1>Page 4</h1>
          </section>

          <section>
            <h1>Page 5</h1>
          </section>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./snap-and-scroll.component.scss'],
  standalone: true
})
export class SnapAndScrollComponent implements AfterViewInit {

  public ngAfterViewInit() {
    const sectionInFullView = 1;
    const cornerObs = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        for (let firstEntry of entries) {
          if (firstEntry.target.id === 'corner') {
            if (firstEntry.isIntersecting) {
              const host = document.querySelector('.container') as any;
              host.style.setProperty('--vertical-scroll', 'scroll');
            }
          }
        }
      },
      { threshold: sectionInFullView }
    );

    const horizontalPageObs = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        for (let firstEntry of entries) {
          if (firstEntry.target.id === 'first-horizontal-page') {
            if (firstEntry.isIntersecting) {
              const host = document.querySelector('.container') as any;
              host.style.setProperty('--vertical-scroll', 'hidden');
            }
          }
        }
      },
      { threshold: 0.01 }
    );

    const corner = document.querySelector('#corner') as any;
    const firstHorizontalPage = document.querySelector('#first-horizontal-page') as any;

    cornerObs.observe(corner);
    horizontalPageObs.observe(firstHorizontalPage);
  }
}
