import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

export interface IPosts {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  loading = false;
  private subscription!: Subscription;
  displayedColumns: string[] = ['id', 'userId', 'title', 'body'];
  dataSource = new MatTableDataSource<IPosts>([]);

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.loading = true;
    this.subscription = this.http
      .get<IPosts[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res: IPosts[]) => {
        this.loading = false;
        this.dataSource.data = res;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
