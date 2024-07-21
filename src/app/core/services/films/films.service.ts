import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Film } from '../../models/films/films.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private apiUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<{ results: Film[] }> {
    return this.http.get<{ results: Film[] }>(`${this.apiUrl}films/`);
  }
}
