import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.page.html',
  styleUrls: ['./update-movie.page.scss'],
  standalone:false
})
export class UpdateMoviePage implements OnInit {

  movieId: string = '';
  title: string = '';
  author: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    // Retrieve query parameters
    this.route.queryParams.subscribe((params) => {
      this.movieId = params['id'];
      this.title = params['title'];
      this.author = params['author'];
    });
  }

  updateMovie() {
    const updatedMovie = { title: this.title, author: this.author };

    this.movieService.updateMovies(this.movieId, updatedMovie).subscribe({
      next: () => {
        console.log('Movie updated successfully');
        this.router.navigate(['/dashboard-movie']); 
      },
      error: (err) => {
        console.error('Error updating Movie:', err);
      },
    });
  }

}
