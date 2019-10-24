import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { PerformancegraphComponent } from './performancegraph/performancegraph.component';
import { HIGHCHARTS_MODULES, ChartModule } from 'angular-highcharts';
import more from 'highcharts/highcharts-more.src';
import exporting from 'highcharts/modules/exporting.src';
import highmaps from 'highcharts/modules/map.src';
import { HighchartsChartComponent } from 'highcharts-angular';

export function highchartsModules() { 
  // apply Highcharts Modules to this array
  return [ more, exporting, highmaps];
}

@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    ChartComponent,
    PerformancegraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [ { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }],
  bootstrap: [AppComponent]
})
export class AppModule { }
