import {Component, Input} from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.scss']
})
export class CasaComponent {
  faStar = faStar;


  @Input() tipo: string = "catalogo";

  @Input() rat: string = "all";


  @Input() featured_photo!: string;
  @Input() city!: string;
  @Input() country!: string;
  @Input() host_type?: string;
  @Input() price!: number;
  @Input() rating!: number;
  @Input() time?: string;
  @Input() id! : number;
  @Input() title! : string;
  @Input() component! :string;

}
