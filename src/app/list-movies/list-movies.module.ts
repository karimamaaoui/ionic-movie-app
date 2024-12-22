import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMoviesPageRoutingModule } from './list-movies-routing.module';

import { ListMoviesPage } from './list-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMoviesPageRoutingModule
  ],
  declarations: [ListMoviesPage],
  exports :[ListMoviesPage]

})
export class ListMoviesPageModule {}
