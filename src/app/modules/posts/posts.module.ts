import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../shared/shared.module';
import { TruncateWordsPipe } from '../../pipes/truncate-words.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [PostsComponent, TruncateWordsPipe],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    SharedModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
})
export class PostsModule {}
