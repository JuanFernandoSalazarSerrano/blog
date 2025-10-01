import { Injectable } from '@angular/core';
import { Publication } from '../models/Publication';
import { publication1 } from '../data/publication1/publication1';
import { publication2 } from '../data/publication2/publication2';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

private readonly publications: Publication[] = [
  publication1,
]

  findAllPublications(): Observable<Publication[]>{
    return of(this.publications)
  }

}
