import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerformancegraphComponent } from './performancegraph/performancegraph.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {
    path: '',
    component: ChartComponent,

  },
  {
    path: 'heatgraph',
    component: PerformancegraphComponent,

  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
