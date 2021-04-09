import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../models/Order';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../service/order.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  updating = false;
  order$: Observable<Order> = this.activatedRoute.params.pipe(
    switchMap(params => this.orderService.get(params.id))
  );


  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private router: Router,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void { }


  onUpdate(form: NgForm, order: Order): void {
    this.updating = true;
    if (order.id === 0) {
      this.orderService.create(order);
      this.router.navigate(['orders']);
      this.showSuccess();
    } else {
      this.orderService.update(order).subscribe(
        () => this.router.navigate(['orders'])
      );
      this.showInfo();
    }
  }

  showSuccess(): void {
    this.toastr.success('You have successfully created an order!', 'Created', {timeOut: 3000});
  }

  showInfo(): void {
    this.toastr.info('You have successfully updated an order!', 'Updated', {timeOut: 3000});
  }
}
