import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public apiUrl = 'https://www.omdbapi.com/?s=movie&apikey=50dbe5ed';
  public movieUrl = 'https://www.omdbapi.com/?s=movie&apikey=50dbe5ed';
  public seriesUrl = 'https://www.omdbapi.com/?s=series&apikey=50dbe5ed';
  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }}
