import {Component, OnInit} from '@angular/core';
import {CasasService} from "../../casas.service";
import {ListaCasas} from "../../interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  objResAtual = {} as ListaCasas;
  objResPast = {} as ListaCasas;

  constructor(private casasService: CasasService) {
  }

  ngOnInit(): void {

    this.casasService.getObjCurrent().subscribe(ra => {
      this.objResAtual = ra;
    })

    this.casasService.getObjPast().subscribe(rp => {
      this.objResPast = rp;
    })
  }

}
