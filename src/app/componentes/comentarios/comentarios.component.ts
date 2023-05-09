import {Component, Input, OnInit} from '@angular/core';
import {CasasService} from "../../casas.service";
import {Host, Review, Reviews} from "../../interfaces";

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  @Input() id!: number;
  @Input() city!: string;

  objReviews = {} as Reviews;
  listReviews: Review [] = [];
  objHost = {} as Host;

  constructor(public casasService: CasasService){}

  ngOnInit(): void {
    this.casasService.getObjReviews(this.id).subscribe(r => {
      this.objReviews = r;
      this.listReviews = this.objReviews.reviews;})

    this.casasService.getObjHost(this.id).subscribe(h => {
      this.objHost = h;
    })


  }
}
