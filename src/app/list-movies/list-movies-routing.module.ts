import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMoviesPage } from './list-movies.page';

const routes: Routes = [
  {
    path: '',
    component: ListMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMoviesPageRoutingModule {}
