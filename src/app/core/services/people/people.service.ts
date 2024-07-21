import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { People } from '../../../core/models/people/people.model';
import { Pagination } from '../../../core/models/api-response/pagination.model';

interface ApiResponse extends Pagination {
  results: People[];
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  getPeople(page: number = 1): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}people/?page=${page}`);
  }

  getCharacter(id: string): Observable<People> {
    return this.http.get<People>(`${this.apiUrl}people/${id}/`);
  }

  getCharacterWithDetails(id: string): Observable<any> {
    return this.getCharacter(id).pipe(
      switchMap(character => {
        const homeworld$ = this.http.get(character.homeworld);
        const films$ = forkJoin(character.films.map(url => this.http.get(url)));
        const vehicles$ = forkJoin(character.vehicles.map(url => this.http.get(url)));
        const starships$ = forkJoin(character.starships.map(url => this.http.get(url)));

        return forkJoin({
          character: Promise.resolve(character),
          homeworld: homeworld$,
          films: films$,
          vehicles: vehicles$,
          starships: starships$
        });
      })
    );
  }
}
