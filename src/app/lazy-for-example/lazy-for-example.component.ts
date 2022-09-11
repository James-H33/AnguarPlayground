import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-for-example',
  templateUrl: './lazy-for-example.component.html',
  styleUrls: ['./lazy-for-example.component.scss']
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
