import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CasasService} from "../../casas.service";
import {ListaCasas,Casa} from "../../interfaces";
import {faMagnifyingGlass}   from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})

export class CatalogoComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass


  id: number = 0;
  objTodasCasas = {} as ListaCasas;
  listaPage : Casa[] = [];


  constructor(private casasService : CasasService) {}

  ngOnInit(): void {

    this.maisResultados()
    /*this.casasService.getListaPage(this.id).subscribe(lp => {
      this.objTodasCasas = <ListaCasas> lp;
      this.listaPage = this.objTodasCasas.data
    })*/
  }

  maisResultados() {
      this.id += 1 ;
     this.casasService.getListaPage(this.id).subscribe(lp => {
      this.objTodasCasas = <ListaCasas> lp;
      this.listaPage.push(...this.objTodasCasas.data);
       //this.objTodasCasas.data.forEach(i => this.listaPage.push(i));
    })

  }
}
