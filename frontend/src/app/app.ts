import { Component, signal } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
// import { Header } from './shared/header/header';
// import { Footer } from './shared/footer/footer';
import { CommonModule, NgIf } from '@angular/common';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer,CommonModule],
  
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontend');

  // 👇 signal to control layout visibility
  showLayout = signal(true);

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Hide header/footer for signin & signup
        this.showLayout.set(!(event.url === '/signin' || event.url === '/signup'));
      });
  }
}
