import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardMoviePage } from './dashboard-movie.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardMoviePageRoutingModule {}
