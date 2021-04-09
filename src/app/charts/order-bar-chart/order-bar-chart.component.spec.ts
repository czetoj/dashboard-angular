import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBarChartComponent } from './order-bar-chart.component';

describe('OrderBarChartComponent', () => {
  let component: OrderBarChartComponent;
  let fixture: ComponentFixture<OrderBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
