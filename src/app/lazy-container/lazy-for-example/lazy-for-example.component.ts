import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LazyForDirective } from 'src/app/directives/lazy-for.directive';

@Component({
  selector: 'app-lazy-for-example',
  templateUrl: './lazy-for-example.component.html',
  styleUrls: ['./lazy-for-example.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    LazyForDirective
  ]
})
export class LazyForExampleComponent implements OnInit {
  public todos: any[] = [];

  public ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(j => this.todos = [
        ...j, ...j, ...j,
        ...j, ...j, ...j,
        ...j, ...j, ...j
      ]);
  }
}
