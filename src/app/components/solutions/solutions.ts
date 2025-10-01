import { Component, OnInit } from '@angular/core';
import { PublicationCardComponent } from '../publication-card-component/publication-card-component';
import { Publication } from '../../models/Publication';
import { PublicationsService } from '../../services/publications-service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'solutions',
  imports: [PublicationCardComponent, RouterModule],
  templateUrl: './solutions.html',
})
export class Solutions implements OnInit {

    solutions!: Publication[];

    constructor(private readonly publicationsService: PublicationsService) {}

  ngOnInit(): void {
    this.publicationsService.findAllPublications().subscribe(
      pubs => {
        this.solutions = pubs.filter(solution => solution.topic === 'Solutions');
      }
    );
  }
}
