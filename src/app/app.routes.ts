import { Routes } from '@angular/router';
import { PeopleComponent } from './modules/people/components/people.component';
import { PeopleDetailsComponent } from './modules/people/id/components/people-details.component';
import { FilmsComponent } from './modules/films/components/films.component';

export const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: PeopleComponent },
  { path: 'people/:id', component: PeopleDetailsComponent },
  { path: 'films', component: FilmsComponent },
];
