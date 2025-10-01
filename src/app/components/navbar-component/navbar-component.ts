import { Component} from '@angular/core';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'navbar-component',
  imports: [RouterModule],
  templateUrl: './navbar-component.html'
})

export class NavbarComponent {

  mobileOpen = false;

}
