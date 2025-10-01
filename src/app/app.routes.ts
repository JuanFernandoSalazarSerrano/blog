import { Routes } from '@angular/router';
import { Publications } from './components/publications/publications';
import { PublicationOpen } from './components/publication-open/publication-open';

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
  }
];
