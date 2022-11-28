import {Component, Input, OnInit} from '@angular/core';
import {faHeart}   from '@fortawesome/free-regular-svg-icons';
import {faStar, faHeart as faHeartFull}   from '@fortawesome/free-solid-svg-icons';
import {CasasService} from "../../casas.service";

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.scss']
})
export class FavoritoComponent {

  faHeart=faHeart;
  faStar=faStar;
  faHeartFull=faHeartFull;

  @Input() tipo: string = "catalogo";

  @Input() featured_photo!: string;
  @Input() city!: string;
  @Input() country!: string;
  @Input() host_type?: string;
  @Input() price!: number;
  @Input() rating!: number;
  @Input() time?: string;
  @Input() id! : number;

  constructor(public casasService: CasasService) {
  }


}
