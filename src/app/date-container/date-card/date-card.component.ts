import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-date-card',
  imports: [
    CommonModule
  ],
  styles: [`
    .date-card {
      height: 150px;
      background-color: #eee;
      padding: 10px;
      border-radius: 5px;

      &.selected {
        background-color: #ccc;
      }
    }
  `],
  template: `
    <div class="date-card" [class.selected]="isSelected">
      <h2>Date</h2>
      <p>{{ date | date }}</p>
    </div>
  `,
})
export class DateCardComponent {
  @Input() public date?: Date;
  @Input() public isSelected = false;
}
