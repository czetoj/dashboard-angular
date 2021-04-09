import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-bar-chart',
  templateUrl: './bill-bar-chart.component.html',
  styleUrls: ['./bill-bar-chart.component.scss']
})
export class BillBarChartComponent implements OnInit {

  @Input() amounts: number[] = [];
  @Input() ids: any[] = [];
  @Input() bgc: string[] = [];
  @Input() chartType: any = 'bar';

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }
  // chartType: any = 'bar';
  barChartLegend = true;
  barChartData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.barChartData = [
      { data: this.amounts, label: 'Bill value', backgroundColor: this.bgc, hoverBackgroundColor: 'darkgreen', borderColor: 'white', borderWidth: 1 }
    ];
  }

}
