import {Component, OnInit} from '@angular/core';
import {CasasService} from "../../casas.service";
import {ListaCasas, Casa} from "../../interfaces";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})

export class CatalogoComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass

  page: number = 0;
  objTodasCasas = {} as ListaCasas;
  listaCasas: Casa[] = [];
  frase: string = "";

  loading: boolean = true;


  constructor(private casasService: CasasService) {
  }

  ngOnInit(): void {

    this.maisResultados()
  }

  maisResultados() {
    this.loading=true;
    this.page += 1;
    this.casasService.getsearchListaPage(this.page,this.frase).subscribe(lp => {
      if(lp) {this.loading = false}
      this.objTodasCasas = lp;
      this.listaCasas.push(...this.objTodasCasas.data);

    })
  }

  procurar(frase: string) {
    this.page = 0;
    this.frase=frase;
    this.listaCasas = [];
    this.maisResultados();
  }
}
