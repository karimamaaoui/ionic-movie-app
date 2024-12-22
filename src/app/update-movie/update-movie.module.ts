import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMoviePageRoutingModule } from './update-movie-routing.module';

import { UpdateMoviePage } from './update-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMoviePageRoutingModule
  ],
  declarations: [UpdateMoviePage]
})
export class UpdateMoviePageModule {}
