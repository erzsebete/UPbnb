import {Component, OnInit} from '@angular/core';
import {Casa, ListaCasas} from "../../interfaces";
import {CasasService} from "../../casas.service";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  objFavCasas = {} as ListaCasas;
  listafavoritos: Casa [] = [];
  listapaises: string [] = [];


  constructor(public casasService: CasasService) {}

  ngOnInit(): void {

    this.casasService.getFavoritos().subscribe(lp => {
      this.objFavCasas = lp;
      this.listafavoritos = this.objFavCasas.data
      this.listafavoritos.forEach(x => {
        if (!this.listapaises.includes(x.country)) {
          this.listapaises.push(x.country)
        }
      })
    })
  }
}
