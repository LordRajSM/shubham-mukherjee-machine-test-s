import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { MatTableDataSource } from '@angular/material/table';

export interface ITodos {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  loading = false;
  private subscription!: Subscription;
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  dataSource = new MatTableDataSource<ITodos>([]);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(){
    this.loading = true;
    this.subscription = this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((res: any) => {
        this.loading = false;
        this.dataSource.data = res;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
