import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Monthly sales Team 1"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 100, name: "sales per month" },
          { y: 500, name: "defined targets" },
          { y: 400, name: "targets achieved" },
          { y: 300, name: "months of high acitivity" },
         
        ]
      }]
    });
      
    chart.render();




    let chart1 = new CanvasJS.Chart("chartContainer1", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Monthly sales Team 2"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 200, name: "sales per month" },
          { y: 1000, name: "defined targets" },
          { y: 700, name: "targets achieved" },
          { y: 600, name: "months of high acitivity" },
         
        ]
      }]
    });
      
    chart1.render();




    let chart2 = new CanvasJS.Chart("chartContainer3", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Monthly sales Team 3"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 400, name: "sales per month" },
          { y: 1500, name: "defined targets" },
          { y: 2000, name: "targets achieved" },
          { y: 900, name: "months of high acitivity" },
         
        ]
      }]
    });
      
    chart2.render();


  }

}
