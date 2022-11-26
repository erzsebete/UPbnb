import { Component, OnInit } from '@angular/core';
import {faMagnifyingGlass, faHeart as faHeartFull}   from '@fortawesome/free-solid-svg-icons';
import {faHeart}   from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faHeart = faHeart;
  faHeartFull = faHeartFull;

  constructor() { }

  ngOnInit(): void {
  }

}
