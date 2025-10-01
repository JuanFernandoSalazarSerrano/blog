import { Component, OnInit } from '@angular/core';
import { Publication } from '../../models/Publication';
import { PublicationsService } from '../../services/publications-service';
import { PublicationCardComponent } from '../publication-card-component/publication-card-component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'writeups',
  imports: [PublicationCardComponent, RouterModule],
  templateUrl: './writeups.html'
})
export class Writeups implements OnInit {

    writeups!: Publication[];

    constructor(private readonly publicationsService: PublicationsService) {}

  ngOnInit(): void {
    this.publicationsService.findAllPublications().subscribe(
      pubs => {
        this.writeups = pubs.filter(solution => solution.topic === 'writeups');
      }
    );
  }
}

