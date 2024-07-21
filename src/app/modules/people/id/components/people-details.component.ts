import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgIf, NgFor, CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { PeopleService } from '../../../../core/services/people/people.service';

@Component({
  selector: 'app-people-details',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgFor,
    CommonModule,
  ],
  templateUrl: './people-details.component.html',
  // styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
  characterDetails$!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService
  ) {}

  ngOnInit() {
    this.characterDetails$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.peopleService.getCharacterWithDetails(id!);
      })
    );
  }

  goBack() {
    this.router.navigate(['/people'])
  }
}
