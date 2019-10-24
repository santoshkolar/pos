import { Component, OnInit } from '@angular/core';
import { MapChart, Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import * as highchartsHeatmap from 'highcharts/modules/heatmap';
// highchartsHeatmap(Highcharts);

@Component({
  selector: 'app-performancegraph',
  templateUrl: './performancegraph.component.html',
  styleUrls: ['./performancegraph.component.css']
})
export class PerformancegraphComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {   
     chart : {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80
     },
     title : {
        text: 'Number of sales made by each of the 3 members to different firms'   
     },
     xAxis : {
        categories: ['members1', 'members2', 'members3']
     },
     yAxis : {
        categories: ['bangalore', 'udupi', 'hubli', 'kumta', 'bidar'],
           title: null
     },
     colorAxis : {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
     },
     legend : {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
     },
     tooltip : {
        formatter: function () {
           return '<b>' + this.series.xAxis.categories[this.point.x] +
              '</b> sold <br><b>' +
              this.point.value +
              '</b> items on <br><b>' +
              this.series.yAxis.categories[this.point.y] + '</b>';
        }
     },
     series : [{
        name: 'Sales per employee',
        borderWidth: 1,
        data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67],
        [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48],
        [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52],
       ],
        
        dataLabels: {
           enabled: true,
           color: '#000000'
        }
     }]
    
  };

  constructor() { }

  ngOnInit() {
    
  }




  
}
