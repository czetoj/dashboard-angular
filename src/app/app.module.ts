import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './page-components/sidebar/sidebar.component';
import { NavbarComponent } from './page-components/navbar/navbar.component';
import { FooterComponent } from './page-components/footer/footer.component';
import { ListOrderComponent } from './list/list-order/list-order.component';
import { EditOrderComponent } from './edit/edit-order/edit-order.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ListBillComponent } from './list/list-bill/list-bill.component';
import { EditBillComponent } from './edit/edit-bill/edit-bill.component';
import { ListProductComponent } from './list/list-product/list-product.component';
import { ListCustomerComponent } from './list/list-customer/list-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditCustomerComponent } from './edit/edit-customer/edit-customer.component';
import { ToastrModule } from 'ngx-toastr';
import { EditProductComponent } from './edit/edit-product/edit-product.component';
import { PagiPipe } from './pipe/pagi.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { SummaryPipe } from './pipe/summary.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { BillBarChartComponent } from './charts/bill-bar-chart/bill-bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { ProductBarChartComponent } from './charts/product-bar-chart/product-bar-chart.component';
import { CustomerChartComponent } from './charts/customer-chart/customer-chart.component';
import { OrderBarChartComponent } from './charts/order-bar-chart/order-bar-chart.component';
import { ShowLatestFivePipe } from './pipe/show-latest-five.pipe';
import { BillGeoChartComponent } from './charts/bill-geo-chart/bill-geo-chart.component';
import { NumberhuPipe } from './pipe/numberhu.pipe';
import { FeaturedPipe } from './pipe/featured.pipe';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ListOrderComponent,
    EditOrderComponent,
    FilterPipe,
    ListBillComponent,
    EditBillComponent,
    ListProductComponent,
    ListCustomerComponent,
    DashboardComponent,
    EditCustomerComponent,
    EditProductComponent,
    PagiPipe,
    SortPipe,
    SummaryPipe,
    PaginationComponent,
    BillBarChartComponent,
    ProductBarChartComponent,
    CustomerChartComponent,
    OrderBarChartComponent,
    ShowLatestFivePipe,
    BillGeoChartComponent,
    NumberhuPipe,
    FeaturedPipe,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
