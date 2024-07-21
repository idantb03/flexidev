import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiderComponent } from "./core/components/sider/sider.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';
}
