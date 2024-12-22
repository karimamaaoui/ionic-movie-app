import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone:false
})
export class FavoritesPage implements OnInit {

  favorites: any[] = [];

  constructor(private movieService : MovieService) { }
  ngOnInit() {
    this.movieService.getFavorites().subscribe((response: any) => {
      if (response) {
        console.log('response', response);
        
      const favoriteIds = Object.keys(response).map(key => response[key].movieId);

      console.log("fav id",favoriteIds)
      if (favoriteIds.length > 0) {
        this.loadFavoriteMovies(favoriteIds);
      } else {
        console.log('No favorites found.');
      }
    } else {
      console.log('No response or empty data');
    }
  });
  }

  loadFavoriteMovies(favoriteIds: string[]) {
    if (favoriteIds && Array.isArray(favoriteIds)) {
      favoriteIds.forEach(movieId => {
        this.movieService.getMoviesById(movieId).subscribe((movieDetails) => {
          if (movieDetails) {
            this.favorites.push({
              id: movieId,
              ...movieDetails
            });
            console.log(movieDetails);

          } else {
            console.log(`No details found for movieId: ${movieId}`);
          }
        }, error => {
          console.log('Error fetching movie details', error);
        });
      });
    } else {
      console.log('Invalid favoriteIds array', favoriteIds);
    }
  }

  deleteFavorite(movieId: string) {
    this.favorites = this.favorites.filter(favorite => favorite.id !== movieId);
  
    this.movieService.deleteFavorite(movieId).subscribe(
      (response) => {
        console.log(`Movie with ID ${movieId} removed from favorites`);
      },
      (error) => {
        console.error('Error removing movie from favorites', error);
      }
    );
  }
  
}  