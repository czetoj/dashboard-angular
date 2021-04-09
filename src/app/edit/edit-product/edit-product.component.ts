import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  updating = false;

  product$: Observable<Product> = this.activatedRoute.params.pipe(
    switchMap(params => this.productService.get(params.id))
  );

  // product: Product = new Product();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void { }

  onUpdate(form: NgForm, product: Product): void {
    if (product.id === 0) {
      this.updating = true;
      this.productService.create(product).subscribe(
        ev => this.router.navigate(['products']))
      this.showSuccess();
    } else {
      this.updating = true;
      this.productService.update(product).subscribe(
        ev => this.router.navigate(['products']))
      this.showInfo();
    }
  }

  showSuccess() {
    this.toastr.success('You have successfully added the product!', 'created', { timeOut: 3000 });
  }
  showInfo() {
    this.toastr.info('You have successfully updated the product!', 'updated', { timeOut: 3000 });
  }

  // onUpdate(product: Product): void {
  //   if (product.id === 0) {
  //     this.productService.create(product);
  //     this.router.navigate(['products']);

  //   } else {
  //     this.productService.update(product);
  //   }
  // }
}
