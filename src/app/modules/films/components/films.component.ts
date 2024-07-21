import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgIf, NgForOf } from '@angular/common';
import { map, Observable, tap } from 'rxjs';
import { FilmsService } from '../../../core/services/films/films.service';
import { MatCardModule } from '@angular/material/card';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { Film } from '../../../core/models/films/films.model';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf,
    MatCardModule,
    NzPaginationModule,
  ],
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films$!: Observable<Film[]>;
  isLoading = false;

  constructor(private filmsService: FilmsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.films$ = this.filmsService.getFilms().pipe(
      map(response => response.results),
      tap(() => this.isLoading = false)
    );
  }
}
