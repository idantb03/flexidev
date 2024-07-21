import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PeopleComponent } from './modules/people/components/people.component';
import { AppRoutingModule } from './app-routing.module';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    PeopleComponent,
    SharedModule
  ],
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch())
  ]
})
export class AppModule { }
