import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/service/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customers$: Observable<Customer> = this.activatedRoute.params.pipe(
    switchMap(params => this.customerService.get(params.id))
  );
  submitted: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onUpdate(form: NgForm, customer: Customer): void {
    if (customer.id !== 0) {
      this.submitted = true;
      this.customerService.update(customer).subscribe(
        ev => this.router.navigate(['customers'])
      );
      this.toaster.info('You have successfully updated a customer!', 'Updated', { timeOut: 3000 });
    } else {
      this.submitted = true;
      this.customerService.create(customer).subscribe(
        ev => this.router.navigate(['customers'])
      );
      this.toaster.success('You have successfully created a customer!', 'Created', { timeOut: 3000 });
    }
  }

}
