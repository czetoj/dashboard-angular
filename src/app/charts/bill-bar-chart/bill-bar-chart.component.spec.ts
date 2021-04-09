import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillBarChartComponent } from './bill-bar-chart.component';

describe('BillBarChartComponent', () => {
  let component: BillBarChartComponent;
  let fixture: ComponentFixture<BillBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
