import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BillService } from 'src/app/service/bill.service';
import { Bill } from 'src/app/models/Bill';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss']
})
export class EditBillComponent implements OnInit {

  updating = false;
  bill$: Observable<Bill> = this.activatedRoute.params.pipe(
    switchMap( params => this.billService.get(params.id) )
  );


  constructor(
    private activatedRoute: ActivatedRoute,
    private billService: BillService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void { }


  onUpdate(form: NgForm, bill: Bill): void {
    this.updating = true;
    if (bill.id === 0) {
      this.billService.create(bill);
      this.router.navigate(['bills']);
      this.showSuccess();
    } else {
      this.billService.update(bill).subscribe(
        () => this.router.navigate(['bills'])
      );
      this.showInfo();
    }
  }

  showSuccess(): void {
    this.toastr.success('You have successfully created a bill!', 'Created', { timeOut: 3000 });
  }
  showInfo(): void {
    this.toastr.info('You have successfully updated a bill!', 'Updated', { timeOut: 3000 });
  }
}
