import { Component } from '@angular/core';
import { User } from '../../models/User';
import { jfsalazar } from '../../data/userData';

@Component({
  selector: 'user-component',
  imports: [],
  templateUrl: './user-component.html',
})
export class UserComponent {

  userInfo: User = jfsalazar

}
