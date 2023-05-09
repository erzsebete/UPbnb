import {Component, Input} from '@angular/core';
import {CasasService} from "../../casas.service";
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as faHeartFull} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.scss']
})


export class ImagemComponent {

  faHeart = faHeart;
  faHeartFull = faHeartFull;

  @Input() id! : number;
  @Input() title! : string;
  @Input() featured_photo!: string;

  constructor(public casasService: CasasService) { }

}
