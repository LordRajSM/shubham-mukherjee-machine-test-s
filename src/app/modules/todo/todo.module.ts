import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    SharedModule,
  ],
})
export class TodoModule {}
