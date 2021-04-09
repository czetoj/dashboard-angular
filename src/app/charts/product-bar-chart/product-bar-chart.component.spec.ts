import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBarChartComponent } from './product-bar-chart.component';

describe('ProductBarChartComponent', () => {
  let component: ProductBarChartComponent;
  let fixture: ComponentFixture<ProductBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
