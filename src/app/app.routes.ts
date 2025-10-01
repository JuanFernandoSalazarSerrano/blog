import { Routes } from '@angular/router';
import { Publications } from './components/publications/publications';
import { PublicationOpen } from './components/publication-open/publication-open';
import { About } from './components/about/about';
import { Solutions } from './components/solutions/solutions';
import { Research } from './components/research/research';
import { Writeups } from './components/writeups/writeups';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/publications'
  },
  {
    path: 'publications',
    component: Publications
  },
  {
    path: 'publications/:id',
    component: PublicationOpen
  },
  {
    path: 'solutions',
    component: Solutions
  },
  {
    path: 'research',
    component: Research
  },
  {
    path: 'writeups',
    component: Writeups
  },
  {
    path: 'about',
    component: About
  },
];
