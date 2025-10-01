import { Component, OnInit } from '@angular/core';
import { PublicationCardComponent } from '../publication-card-component/publication-card-component';
import { Publication } from '../../models/Publication';
import { PublicationsService } from '../../services/publications-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'research',
  imports: [PublicationCardComponent, RouterModule],
  templateUrl: './research.html',
})
export class Research implements OnInit {

    research!: Publication[];

    constructor(private readonly publicationsService: PublicationsService) {}

  ngOnInit(): void {
    this.publicationsService.findAllPublications().subscribe(
      pubs => {
        this.research = pubs.filter(solution => solution.topic === 'Research');
      }
    );
  }
}

