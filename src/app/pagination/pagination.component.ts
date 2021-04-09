import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  indexPage = 1;
  pagiLength = 5;
  @Input() length: number = 0;
  @Output() onLength: EventEmitter<number> = new EventEmitter();
  @Output() onIndex: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onLengthChange() {
    this.onLength.emit(this.pagiLength);
  }

  onPagiNumber(page: number): void {
    this.indexPage = page;
    this.onIndex.emit(this.indexPage);
  }

  onPagiBack(): void {
    this.indexPage--;
    if (this.indexPage < 1) {

      this.indexPage = Math.ceil(this.length / this.pagiLength);
    };
    this.onIndex.emit(this.indexPage);
  }
  onPagiNext(): void {
    this.indexPage++;
    let billPageLength = 0;
    billPageLength = Math.ceil(this.length / this.pagiLength);
    if (this.indexPage > billPageLength) { this.indexPage = 1; }
    this.onIndex.emit(this.indexPage);
  }
  onPagiLastNumber(): void {
    let lastPageNumber = 0;

    lastPageNumber = Math.ceil(this.length / this.pagiLength);
    this.indexPage = lastPageNumber;
    this.onIndex.emit(this.indexPage);
  };

}
