import { Component } from '@angular/core';
import { NavbarComponent } from './navbar-component/navbar-component';
import { UserComponent } from "./user-component/user-component";
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { Footer } from './footer/footer';

@Component({
  selector: 'blog-app',
  imports: [NavbarComponent, UserComponent, RouterOutlet, Footer],
  templateUrl: './blog-app.html'
})
export class BlogApp {
  isInPublication = false;

  constructor(private readonly router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const match = RegExp(/^\/publications\/\d+$/).exec(event.urlAfterRedirects);
        this.isInPublication = !!match;
      }
    });
  }
}
