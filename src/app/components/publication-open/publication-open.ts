import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publication } from '../../models/Publication';
import { PublicationsService } from '../../services/publications-service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-publication-open',
  imports: [],
  templateUrl: './publication-open.html'
})
export class PublicationOpen implements OnInit {

  publications!: Publication[];
  publication!: Publication;
  safeUrl!: SafeResourceUrl;

  constructor(
    private readonly route: ActivatedRoute,
    private router: Router,
    private publicationsService: PublicationsService,
    private sanitizer: DomSanitizer
  ) {
    if(this.router.currentNavigation()?.extras.state){
      this.publication = this.router.currentNavigation()?.extras.state!['publication']
    }
  }

  ngOnInit(): void {
    this.publicationsService.findAllPublications().subscribe(
      pubs => this.publications = pubs
    );

    this.route.paramMap.subscribe(params => {
      const idPublication: number = +(params.get('id') || '0')
      console.log(idPublication, 'sdsdsa')
      this.publication = this.publications.find(publication => publication.id === idPublication) || new Publication();

    if(idPublication > this.publications.length || idPublication <= 0 ){
      this.publication = new Publication()
    }

    else{
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/' + (this.publication?.id ?? '0') + '.html');
        }
      }
    );
  }
}
