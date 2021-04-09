import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bill } from '../models/Bill';
import { Customer } from '../models/Customer';
import { BillService } from '../service/bill.service';
import { CustomerService } from '../service/customer.service';
import { Order } from '../models/Order';
import { OrderService } from '../service/order.service';
import { ProductService } from '../service/product.service';
import { Product } from '../models/Product';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  indexPage = 1;
  pagiLength = 5;
  ArrayLength = 0;

  timer: number = 0;
  seconds: number = 0;

  // Bill grafikonhoz.
  billList$: BehaviorSubject<Bill[]> = this.billService.list$;
  billAmountArray: number[] = [];
  billIdArray: any[] = [];
  billBackgroundColorArray: string[] = [];
  revenue: number = 0;
  chartType: string = 'bar';

  // Order grafikonhoz.
  orderList$: BehaviorSubject<Order[]> = this.orderService.orderList$;
  orderAmountArray: number[] = [];
  orderIdArray: any[] = [];
  orderNumber: number = 0;

  // Product grafikonhoz.
  productList$: BehaviorSubject<Product[]> = this.productService.list$;
  productPriceArray: number[] = [];
  productIdArray: any[] = [];
  productPrices: number = 0;

  accum_bill = 0;
  accum_active_customers = 0;
  accum_active_products = 0;
  accum_active_unpaid_orders = 0;
  warn_acum = 0;

  // Customer grafikonhoz.
  customerList$: BehaviorSubject<Customer[]> = this.customerService.list$;
  customerBGCA: string[] = [];
  countryArray: any[] = [];
  customerArray: any[] = [];
  customerData: number[] = [];
  countryData: any[] = [];
  customerChartType: string = 'bar';


  constructor(
    private billService: BillService,
    private orderService: OrderService,
    private productService: ProductService,
    private customerService: CustomerService
  ) {
  }


  ngOnInit(): void {

    setInterval(() => {
      if (this.seconds == 60) {
        this.timer++;
        this.seconds = 0;
      }
      this.seconds += 1
    }, 1000);

    // Bill grafikonhoz.
    this.billList$.subscribe(data => {
      data.forEach(item => {
        this.billAmountArray.push(item.amount);
        this.revenue += item.amount;
        this.billBackgroundColorArray.push(`rgb(${this.rgb()}, ${this.rgb()}, ${this.rgb()})`)
      });
    });

    this.billList$.subscribe(data => {
      data.forEach(item => {
        this.billIdArray.push(item.id);
      })
    })

    // Order grafikonhoz.
    this.orderList$.subscribe(orders => {
      orders.forEach(order => {
        this.orderAmountArray.push(order.amount);
      });
    });

    this.orderList$.subscribe(orders => {
      orders.forEach(order => {
        this.orderIdArray.push(order.id);
      });
    });

    this.orderList$.subscribe( orders => {
      orders.forEach( () => {
        this.orderNumber += 1;
      } )
    } )

    // Product grafikonhoz.
    this.productList$.subscribe(data => {
      data.forEach(item => {
        this.productPriceArray.push(item.price);
        this.productPrices += item.price;
      });
    })

    this.productList$.subscribe(data => {
      data.forEach(item => {
        this.productIdArray.push(item.id);
      })
    })

    // Customer grafikonhoz.
    this.customerList$.subscribe(data => {
      data.forEach(item => {
        this.countryArray.push(item.address.country)
        this.customerBGCA.push(`rgb(${this.rgb()}, ${this.rgb()}, ${this.rgb()})`);
      })
      this.countryArray.forEach((el: any) => { this.countryData[el] = this.countryData[el] ? (this.countryData[el] += 1) : 1; }
      );
      this.countryData = Object.keys(this.countryData);
    })

    this.customerList$.subscribe(data => {
      data.forEach(item => {
        this.customerArray.push(item.address.country)
      })
      this.customerArray.forEach((el: any) => { this.customerData[el] = this.customerData[el] ? (this.customerData[el] += 1) : 1; });
      this.customerData = Object.values(this.customerData);
    })

    // this.customerData == this.countryArray.values.length

    // this.customerList$.subscribe(data => {
    //   data.forEach(item => {
    //     this.countryArray.push(item.active);
    //   })
    // })



    // this counts new  bills
    this.billList$.subscribe(data => {
      data.forEach(item => {
        switch (item.status) {
          case 'new':
            this.accum_bill += 1;

        }
      });
    });

    // this counts new  orders
    this.orderList$.subscribe(orders => {
      orders.forEach(order => {
        switch (order.status) {
          case 'new':
            this.accum_active_unpaid_orders += 1;
            this.warn_acum = this.accum_bill + this.accum_active_unpaid_orders;
        }
      });
    });

    // this counts active products

    this.productList$.subscribe(data => {
      data.forEach(item => {
        switch (item.active) {
          case true:
            this.accum_active_products += 1;
        }
      });
    });

    // this counts active users
    this.customerList$.subscribe(data => {
      data.forEach(item => {
        switch (item.active) {
          case true:
            this.accum_active_customers += 1;
        }
      });
    });
  }

  onChartTypePie() {
    this.chartType = 'doughnut';
  }
  onChartTypeBar() {
    this.chartType = 'bar';
  }
  onCustomerChartTypePie() {
    this.customerChartType = 'pie';
  }
  onCustomerChartTypeBar() {
    this.customerChartType = 'bar';
  }

  rgb(): number {
    return Math.floor((Math.random() * 255) + 1);
  }
}
