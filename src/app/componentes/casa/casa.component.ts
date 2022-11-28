import {Component, Input, OnInit} from '@angular/core';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faStar, faHeart as faHeartFull} from '@fortawesome/free-solid-svg-icons';
import {CasasService} from "../../casas.service";

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.scss']
})
export class CasaComponent {

  faHeart = faHeart;
  faStar = faStar;
  faHeartFull = faHeartFull;

  @Input() tipo: string = "catalogo";

  @Input() featured_photo!: string;
  @Input() city!: string;
  @Input() country!: string;
  @Input() host_type?: string;
  @Input() price!: number;
  @Input() rating!: number;
  @Input() time?: string;
  @Input() id! : number;
  @Input() title! : string;


  constructor(public casasService: CasasService) {
  }

}
