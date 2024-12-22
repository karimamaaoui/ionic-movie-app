import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get('https://ionicproject-daafe-default-rtdb.firebaseio.com/Movies.json');
  }

  addMovie(newMovie) {
    return this.http.post(
      'https://ionicproject-daafe-default-rtdb.firebaseio.com/Movies.json',
      newMovie
    );
  }

  deleteMovies(MoviesId) {
    return this.http.delete(
      `https://ionicproject-daafe-default-rtdb.firebaseio.com/Movies/${MoviesId}.json`
    );
  }

  getMoviesById(id) {
    return this.http.get(
      `https://ionicproject-daafe-default-rtdb.firebaseio.com/Movies/${id}.json`
    );
  }

  updateMovies(MoviesId: string, Movies: any) {
    return this.http.patch(
      `https://ionicproject-daafe-default-rtdb.firebaseio.com/Movies/${MoviesId}.json`,
      Movies
    );
  }

  addFavorite(movieId: string, isFavorite: boolean) {
    const movieData = {
      movieId: movieId,
      isFavorite: isFavorite
    };
  
    return this.http.post(
      'https://ionicproject-daafe-default-rtdb.firebaseio.com/Favorites.json',
      movieData
    );
  }
  
  getFavorites(): Observable<any> {
    return this.http.get('https://ionicproject-daafe-default-rtdb.firebaseio.com/Favorites.json');
  }
  deleteFavorite(movieId: string) {
    return this.http.delete(
      `https://ionicproject-daafe-default-rtdb.firebaseio.com/Favorites/${movieId}.json`
    );
  }
  
}