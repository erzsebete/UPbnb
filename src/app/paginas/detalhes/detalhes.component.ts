import {Component, OnInit} from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from "@angular/router";
import {CasasService} from "../../casas.service";
import {Detalhes, Host} from "../../interfaces";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  faStar = faStar;
  objHost = {} as Host;
  objDetalhe = {} as Detalhes;
  id: number;

  status: boolean = false;

  constructor(private route: ActivatedRoute, public casasService: CasasService) {
    this.id = route.snapshot.params['id_casa'];
  }

  ngOnInit(): void {

    this.casasService.getObjHost(this.id).subscribe(h => {
      this.objHost = h;
    })

    this.casasService.getObjDetalhe(this.id).subscribe(d => {
      this.objDetalhe = d;
    })
  }

}
