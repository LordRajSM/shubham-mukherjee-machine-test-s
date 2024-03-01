import {
  Component,
  ViewChild,
  Input,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements AfterViewInit {
  pageSizeOptions: number[] = [10, 20, 30, 40, 50];
  atPage: number = 0;
  @Input() dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cdk: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewChecked() {
    this.loadPageSettings();
    this.cdk.detectChanges();
  }

  onPageChange(event: PageEvent): void {
    const pageSize = event.pageSize;
    const pageIndex = event.pageIndex;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { pageSize: pageSize, pageIndex: pageIndex },
      queryParamsHandling: 'merge',
    });
  }

  private loadPageSettings(): void {
    const pageSize = this.route.snapshot.queryParamMap.get('pageSize');
    const pageIndex = this.route.snapshot.queryParamMap.get('pageIndex');
    if (pageSize && pageIndex) {
      this.paginator.pageSize = +pageSize;
      this.paginator.pageIndex = +pageIndex;
    }
  }
}
