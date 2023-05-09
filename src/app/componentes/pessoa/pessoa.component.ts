import {Component, Input} from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent{

  faStar = faStar;

  @Input() tipo: string = "host";
  @Input() photo!: string;
  @Input() name!: string;
  @Input() rating?: number;
  @Input() date!: string;
  @Input() comment?: string;
  @Input() country?: string;
  @Input() city?: string;
  @Input() id!: number;

}
