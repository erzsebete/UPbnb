import { Component, OnInit } from '@angular/core';
import {Casa, ListaCasas} from "../../interfaces";
import {CasasService} from "../../casas.service";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  objTodasCasas = {} as ListaCasas;
  listafavoritos: Casa [] = [];
  listapaises: string [] = [];



  constructor(public casasService : CasasService) { }

  ngOnInit(): void {
    this.casasService.getListaPage(1).subscribe(lp => {
      this.objTodasCasas = <ListaCasas> lp;
      this.listafavoritos = this.objTodasCasas.data.filter(x => this.casasService.listaFav.includes(x.id));
      this.listafavoritos.forEach(x => this.listapaises.push(x.country));
    })
  }




}
