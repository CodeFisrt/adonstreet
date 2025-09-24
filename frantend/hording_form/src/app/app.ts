import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { login} from './page/login/login';
import { HttpClientModule } from '@angular/common/http';
import { Hoarding } from './page/hording/hording';
import { Dashboard } from './page/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hording');
}
