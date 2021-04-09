import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-chart',
  templateUrl: './customer-chart.component.html',
  styleUrls: ['./customer-chart.component.scss']
})
export class CustomerChartComponent implements OnInit {

  @Input() customers: number[] = [5, 8, 2, 4];
  @Input() countries: any[] = ['England', 'USA', 'Australia', 'Scotland'];
  @Input() bgc: string[] = [];
  @Input() barChartType: any = 'bar';

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  barChartLegend = true;
  barChartData: any[] = [];


  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.barChartData = [
        {
          data: this.customers, label: 'Customers', backgroundColor: this.bgc,
          hoverBackgroundColor: 'blue', borderColor: 'transparent', borderWidth: 1
        }
      ];
    }, 500)
  }

}
