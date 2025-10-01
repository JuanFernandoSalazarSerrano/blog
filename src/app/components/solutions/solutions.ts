import { Component } from '@angular/core';
import { PublicationCardComponent } from '../publication-card-component/publication-card-component';
import { Publication } from '../../models/Publication';



@Component({
  selector: 'solutions',
  imports: [PublicationCardComponent],
  templateUrl: './solutions.html',
})
export class Solutions {

    solutions!: Publication[];

}
