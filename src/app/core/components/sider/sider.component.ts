import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sider',
  standalone: true,
  imports: [],
  templateUrl: './sider.component.html',
  styleUrl: './sider.component.css'
})
export class SiderComponent {
  constructor(
    private router: Router,
  ) {}
  goPeople() {
    this.router.navigate(['/people'])
  }
  goFilms() {
    this.router.navigate(['/films'])
  }
}
