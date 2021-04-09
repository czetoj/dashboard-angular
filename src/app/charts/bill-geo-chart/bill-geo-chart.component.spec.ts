import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillGeoChartComponent } from './bill-geo-chart.component';

describe('BillGeoChartComponent', () => {
  let component: BillGeoChartComponent;
  let fixture: ComponentFixture<BillGeoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillGeoChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillGeoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
