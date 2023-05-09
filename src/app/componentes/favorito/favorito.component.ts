import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.scss']
})
export class FavoritoComponent {

  @Input() tipo: string = "catalogo";
  @Input() featured_photo!: string;
  @Input() city!: string;
  @Input() country!: string;
  @Input() host_type?: string;
  @Input() price!: number;
  @Input() rating!: number;
  @Input() id! : number;
  @Input() title! : string;

}
