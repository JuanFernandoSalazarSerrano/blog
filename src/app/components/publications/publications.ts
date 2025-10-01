import { Component, OnInit } from '@angular/core';
import { PublicationCardComponent } from '../publication-card-component/publication-card-component';
import { Publication } from '../../models/Publication';
import { PublicationsService } from '../../services/publications-service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-publications',
  imports: [PublicationCardComponent, RouterModule],
  templateUrl: './publications.html'
})
export class Publications implements OnInit {

  publications: Publication[] = [];

  constructor(private publicationsService: PublicationsService, private router: Router) {}

  ngOnInit(): void {
    this.publicationsService.findAllPublications().subscribe(
      pubs => this.publications = pubs
    );
  }
}
