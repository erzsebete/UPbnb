import { Component, OnInit } from '@angular/core';
import {ListaCasas} from "../interfaces";
import {CasasService} from "../casas.service";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  objTodasCasas = {} as ListaCasas;

  constructor(private casasService : CasasService) { }

  ngOnInit(): void {
    this.casasService.getListaPage(1).subscribe(lp => {
      this.objTodasCasas = <ListaCasas> lp;

    })
  }

}
