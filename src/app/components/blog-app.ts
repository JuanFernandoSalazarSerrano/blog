import { Component} from '@angular/core';
import { NavbarComponent } from './navbar-component/navbar-component';
import { UserComponent } from "./user-component/user-component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'blog-app',
  imports: [NavbarComponent, UserComponent, RouterOutlet],
  templateUrl: './blog-app.html'})

export class BlogApp {



}
