import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../dashboard-movie/services/movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.page.html',
  styleUrls: ['./list-movies.page.scss'],
  standalone:false
})
export class ListMoviesPage implements OnInit {
  movies: any[] = [];
  searchQuery: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  currentPage: number = 0;
  moviesPerPage: number = 10;
  selectedTab: string = 'dashboard-movies';  

  constructor(
    private movieService: MoviesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

 
  ngOnInit() {
    this.fetchMovies();
  }



  fetchMovies() {
    this.isLoading = true;
    this.movieService.getMovies().subscribe({
      next: (response) => {
        console.log("response",response)
       this.movies = response.Search || [];
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'An error occurred while fetching books.';
        this.isLoading = false;
        console.error(error);
      }
    });
  }

  getPaginatedMovies() {
    const startIndex = this.currentPage * this.moviesPerPage;
    return this.movies.slice(startIndex, startIndex + this.moviesPerPage);
  }

  loadNextPage() {
    if ((this.currentPage + 1) * this.moviesPerPage < this.movies.length) {
      this.currentPage++;
    }
  }


}
