import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerChartComponent } from './customer-chart.component';

describe('CustomerChartComponent', () => {
  let component: CustomerChartComponent;
  let fixture: ComponentFixture<CustomerChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
