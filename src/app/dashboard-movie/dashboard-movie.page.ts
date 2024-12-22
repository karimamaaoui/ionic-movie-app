import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-dashboard-movie',
  templateUrl: './dashboard-movie.page.html',
  styleUrls: ['./dashboard-movie.page.scss'],
  standalone:false
})
export class DashboardMoviePage implements OnInit {

  movies: any[] = [];
  searchQuery: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  currentPage: number = 0;
  moviesPerPage: number = 10;
  selectedTab: string = 'list-movies';  
  currentUserEmail: string = '';
  constructor(
    private moviesService: MovieService,
    private router: Router,
      private authService:AuthService
  ) {}

  ngOnInit() {
    this.fetchMovies();
    
    // Subscribe to router events to update selectedTab
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateSelectedTab();
    });
    
    // Initial update of selectedTab based on current route
    this.updateSelectedTab();
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.email) {
      this.currentUserEmail = currentUser.email;
    }
  }

  updateSelectedTab() {
    const urlSegments = this.router.url.split('/');
    const lastSegment = urlSegments[urlSegments.length - 1];
    
    if (lastSegment === 'movies') {
      this.selectedTab = 'movies';
    } else if (lastSegment === 'profile') {
      this.selectedTab = 'profile';
    } else {
      this.selectedTab = 'list-movies';
    }
  }

  fetchMovies() {
    this.isLoading = true;
    this.moviesService.getAllMovies().subscribe({
      next: (response) => {
        console.log("repsonse ", response);
       // this.movies = response.to || [];
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'An error occurred while fetching movies.';
        this.isLoading = false;
        console.error(error);
      }
    });
  }

  getPaginatedBooks() {
    const startIndex = this.currentPage * this.moviesPerPage;
    return this.movies.slice(startIndex, startIndex + this.moviesPerPage);
  }

  loadNextPage() {
    if ((this.currentPage + 1) * this.moviesPerPage < this.movies.length) {
      this.currentPage++;
    }
  }
  onTabChange() {
    // This method is called when the tab changes
    console.log('Selected tab:', this.selectedTab);
  }

  goToFavoritesPage(){
    this.router.navigate(['/favorites']); 

  }
}
