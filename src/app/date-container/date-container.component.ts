import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DateCardComponent } from './date-card/date-card.component';
import { MiniCalendarComponent } from "./mini-calendar/mini-calendar.component";

@Component({
  selector: 'app-date-container',
  templateUrl: './date-container.component.html',
  styleUrls: ['./date-container.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DateCardComponent,
    MiniCalendarComponent
  ]
})
export class DateContainerComponent implements AfterViewInit {
  @ViewChild('DateWrapper')
  public dateWrapper?: ElementRef<HTMLDivElement>;
  public dates: Date[] = [];

  public activeDate = new Date();

  public ngOnInit(): void {
    this.populateDates();
    this.activeDate = this.dates[0];
  }

  public ngAfterViewInit(): void {
    const width = this.dates.length * 220;

    this.dateWrapper?.nativeElement.style.setProperty('--date-wrapper-width', `${width}px`);
  }

  private populateDates() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date(year, month, 1);
    const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const dates = [];

    for (let i = 0; i < days; i++) {
      dates.push(new Date(year, month, i + 1));
    }

    this.dates = dates;
  }
}
