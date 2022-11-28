import {Component, Input, OnInit} from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent{

  faStar=faStar;

  @Input() tipo: string = "host";

  @Input() photo!: string;
  @Input() name!: string;
  @Input() date!: string;
  @Input() rating?: number;
  @Input() comment?: string;

}
