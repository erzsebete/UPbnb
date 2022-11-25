import { Component } from '@angular/core';
import {CasasService} from "./casas.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UPbnb';
  constructor(public casasService: CasasService) {
  }
}
