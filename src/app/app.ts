import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogApp } from './components/blog-app';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlogApp],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('blog-app');
}
