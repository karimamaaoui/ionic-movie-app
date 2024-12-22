import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  standalone:false
})
export class MoviesPage implements OnInit {

  constructor(private movieService: MovieService,    private router: Router,  ) {}
  title: string = '';
  author: string = '';
  allMovies = [];

  ngOnInit() {
    this.loadMovies(); 
  }

  loadMovies() {
    this.movieService.getAllMovies().subscribe({
      next: (response) => {
        console.log(response);

        for (const key in response) {
          this.allMovies.push({
            id: key,
            ...response[key],
          });
        }
        console.log(this.allMovies);
      },
      error: (err) => {
        console.log(err);
      },
  });
}
addMovie() {
  if (this.title && this.author) {
    const newMovie = { title: this.title, author: this.author };
    this.movieService.addMovie(newMovie).subscribe({
      next: (response) => {
        this.allMovies.push({ id: response['name'], ...newMovie });
        this.title = '';
        this.author = '';
      },
      error: (err) => {
        console.error('Error adding movie:', err);
      }
    });
    
  }
}
deleteMovie(moviesId: string) {
  this.movieService.deleteMovies(moviesId).subscribe({
    next: () => {
      console.log('movies deleted successfully');
      this.allMovies = this.allMovies.filter(movies => movies.id !== moviesId);
    },
    error: (err) => {
      console.error('Error deleting movie:', err);
    }
  });
}

openUpdate(movieId: string) {
  const selectedMovie = this.allMovies.find((movie) => movie.id === movieId);

  if (selectedMovie) {
    this.router.navigate(['/update-movie'], { 
      queryParams: { 
        id: selectedMovie.id, 
        title: selectedMovie.title, 
        author: selectedMovie.author 
      }
    });
  }
}



updateBook(updatedMovies: any) {
  this.movieService.updateMovies(updatedMovies.id, updatedMovies).subscribe({
    next: () => {
      const index = this.allMovies.findIndex((b) => b.id === updatedMovies.id);
      if (index !== -1) {
        this.allMovies[index] = updatedMovies;
      }
    },
    error: (err) => console.error('Error updating book:', err),
  });
}

toggleFavorite(movie) {
  movie.isFavorite = !movie.isFavorite;

  this.movieService.addFavorite(movie.id, movie.isFavorite).subscribe({
    next: () => {
      console.log('Favorite status updated in Firebase');
    },
    error: (err) => {
      console.error('Error updating favorite status in Firebase:', err);
    }
  });
}

}
