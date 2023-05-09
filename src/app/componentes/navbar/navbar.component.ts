import { Component } from '@angular/core';
import {faMagnifyingGlass}   from '@fortawesome/free-solid-svg-icons';
import {faHeart}   from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  faMagnifyingGlass = faMagnifyingGlass;
  faHeart = faHeart;

}
