import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bill } from 'src/app/models/Bill';
import { BillService } from 'src/app/service/bill.service';

declare let google: any;

@Component({
  selector: 'app-bill-geo-chart',
  templateUrl: './bill-geo-chart.component.html',
  styleUrls: ['./bill-geo-chart.component.scss']
})
export class BillGeoChartComponent implements OnInit {

  billList$: BehaviorSubject<Bill[]> = this.billService.list$;

  constructor(private billService: BillService
  ) { }

  ngOnInit(): void {

    this.billList$.subscribe(data => {
      const visuArray: any[] = [];
      data.forEach((item) => {
        visuArray.push([item.country, item.amount]);
      });
      visuArray.sort();

      visuArray.unshift(['Regions', 'Amounts']);
      for (let i = 2; i < visuArray.length; i++) {
        if (visuArray[i][0] === visuArray[i - 1][0]) {
          visuArray[i][1] += visuArray[i - 1][1];
        }
      };

      google.charts.load('current', {
        'packages': ['geochart'],
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        const data = google.visualization.arrayToDataTable(
          visuArray
        );
        const options: any = {
          region: '150',
          colorAxis: { colors: ['green', 'orange', 'red', 'purple'] }
        };
        const chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, options);
      }
    })
  }
}
