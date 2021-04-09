import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-order-bar-chart',
  templateUrl: './order-bar-chart.component.html',
  styleUrls: ['./order-bar-chart.component.scss']
})
export class OrderBarChartComponent implements OnInit {
  // [datasets]="barChartData"
  @Input() amounts: number[] = [];

  // [labels]="ids"
  @Input() ids: Label[] = [];

  // [options]="barChartOptions"
  barChartOptions: ChartOptions = {
    responsive: true,
  };

  // [chartType]="barChartType"
  barChartType: ChartType = 'bar';

  // [legend]="barChartLegend"
  barChartLegend = true;

  // [datasets]="barChartData"
  barChartData: ChartDataSets[] = [];


  constructor() { }

  ngOnInit(): void {

    // [datasets]="barChartData"
    this.barChartData = [
      {
        label: 'Order amount',
        data: this.amounts,
        backgroundColor: '#ffa726',
        hoverBackgroundColor: '#fb8c00',
      }
    ];

  }

}
