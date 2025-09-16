import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { login} from './page/login/login';
import { HttpClientModule } from '@angular/common/http';
import { Hoarding } from './page/hording/hording';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, Hoarding,login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hording');
}
