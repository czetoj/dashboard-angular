import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-bar-chart',
  templateUrl: './product-bar-chart.component.html',
  styleUrls: ['./product-bar-chart.component.scss']
})
export class ProductBarChartComponent implements OnInit {

  @Input() price: number[] = [];
  @Input() ids: any[] = [];

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }
  barChartType: any = 'line';
  barChartLegend = true;
  barChartData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.barChartData = [
      { data: this.price, label: 'Products value', backgroundColor: '#944d37'}
    ];
  }

}
