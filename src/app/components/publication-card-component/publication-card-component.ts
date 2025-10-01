import { Component, Input} from '@angular/core';
import { Publication } from '../../models/Publication';

@Component({
  selector: 'publication-card-component',
  imports: [],
  templateUrl: './publication-card-component.html'
})
export class PublicationCardComponent {

  @Input() publicationCartInfo!: Publication;

}
