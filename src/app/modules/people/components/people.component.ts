import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgIf, NgForOf } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, switchMap } from 'rxjs';
import { PeopleService } from '../../../core/services/people/people.service';
import { People } from '../../../core/models/people/people.model';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgForOf, NzPaginationModule],
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people$!: Observable<People[]>;
  currentPage$ = new BehaviorSubject<number>(1);
  totalItems$ = new BehaviorSubject<number>(0);
  isLoading = false;

  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.people$ = this.currentPage$.pipe(
      switchMap(page => {
        this.isLoading = true;
        return this.peopleService.getPeople(page);
      }),
      switchMap(response => {
        this.isLoading = false;
        this.totalItems$.next(response.count);
        return [response.results];
      })
    );
  }

  onPageChange(page: number): void {
    this.currentPage$.next(page);
  }

  onCharacterClick(characterUrl: string): void {
    const id = this.extractIdFromUrl(characterUrl);
    this.router.navigate(['/people', id]);
  }

  private extractIdFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }
}
