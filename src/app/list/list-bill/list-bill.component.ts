import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Bill } from 'src/app/models/Bill';
import { BillService } from 'src/app/service/bill.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-bill',
  templateUrl: './list-bill.component.html',
  styleUrls: ['./list-bill.component.scss']
})
export class ListBillComponent implements OnInit {

  // szükséges változók a filterhez
  filterKey = 'id';
  phrase = '';
  // szükséges változók a filterhez

  billProperties: string[] = Object.keys(new Bill());
  billList$: BehaviorSubject<Bill[]> = this.billService.list$;
  indexPage = 1;
  pagiLength = 5;
  ArrayLength = 0;
  ascend = true;
  sortKey = '';
  lastDragKey = "";

  cols: { key: string, title: string }[] = [
    { key: 'id', title: 'Id' },
    { key: 'orderID', title: 'OrderId' },
    { key: 'amount', title: 'Amount' },
    { key: 'country', title: 'Country' },
    { key: 'status', title: 'Status' },
  ];

  constructor(
    private billService: BillService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.billService.getAll();
    this.billList$.subscribe(data => { this.ArrayLength = data.length });
  }

  onHeaderDragStart(event: DragEvent): void {
    this.lastDragKey = (event.target as HTMLTableHeaderCellElement).id;
    console.log(this.lastDragKey);
  }

  onHeaderDrop(event: DragEvent): void {
    event.preventDefault();
    const targetID: string = (event.target as HTMLTableHeaderCellElement).id;
    const from = this.cols.findIndex(col => col.key === this.lastDragKey);
    const to = this.cols.findIndex(col => col.key === targetID);
    const temp = Object.assign({}, this.cols[from]);
    this.cols.splice(from, 1);
    this.cols.splice(to, 0, temp);
  }

  onLength(length: number) {
    this.pagiLength = length;
  }
  onIndex(length: number) {
    this.indexPage = length;
  }

  onChangeSort(data: string): void {
    this.sortKey = data;
    this.ascend = !this.ascend;
  }

  onDelete(bill: Bill): void {
    this.billService.remove(bill);
    this.showWarning();
    this.router.navigate(['bills']);
  }

  showWarning(): void {
    this.toastr.warning('You have successfully deleted a bill!', 'Deleted', { timeOut: 4000 });
  }

}
