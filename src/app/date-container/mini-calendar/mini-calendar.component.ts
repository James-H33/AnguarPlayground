import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-calendar',
  templateUrl: './mini-calendar.component.html',
  styleUrls: ['./mini-calendar.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class MiniCalendarComponent {
  @Input()
  public dates: Date[] = [];

  @Input()
  public activeDate?: Date;
}
