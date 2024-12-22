import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardMoviePageRoutingModule } from './dashboard-movie-routing.module';

import { DashboardMoviePage } from './dashboard-movie.page';
import { ListMoviesPage } from "../list-movies/list-movies.page";
import { ProfilePageModule } from "../profile/profile.module";
import { MoviesPage } from "../movies/movies.page";
import { ListMoviesPageModule } from '../list-movies/list-movies.module';
import { MoviesPageModule } from '../movies/movies.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardMoviePageRoutingModule,
    ListMoviesPageModule,
    ProfilePageModule,
    MoviesPageModule
],
  declarations: [DashboardMoviePage]
})
export class DashboardMoviePageModule {}
