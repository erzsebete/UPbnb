import {Component, OnInit} from '@angular/core';
import {faHeart } from '@fortawesome/free-regular-svg-icons';
import {faStar, faHeart as faHeartFull,  faTv, faDog, faCircleStop,faWifi,faTemperatureLow,faSmoking,faFireBurner,faTablet} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from "@angular/router";
import {CasasService} from "../../casas.service";
import {Detalhes, Features, Host, Review, Reviews} from "../../interfaces";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  faHeart = faHeart;
  faStar = faStar;
  faHeartFull = faHeartFull;

  faDog = faDog;
  faTv=faTv;
  faCircleStop=faCircleStop;
  faWifi=faWifi;
  faTemperatureLow=faTemperatureLow;
  faSmoking=faSmoking;
  faFireBurner=faFireBurner;
  faTablet=faTablet;


  objHost = {} as Host;
  objReviews = {} as Reviews;
  listReviews: Review [] = [];

  objDetalhe = {} as Detalhes;

  objFeatures = {} as Features;
  listFeatures: string [] = [];

  id: number;

  constructor(private route: ActivatedRoute, public casasService: CasasService) {
    this.id = route.snapshot.params['id_casa'];
  }

  ngOnInit(): void {

    this.casasService.getObjHost(this.id).subscribe(h => {
      this.objHost = <Host>h;
    })

    this.casasService.getObjReviews(this.id).subscribe(r => {
      this.objReviews = <Reviews>r;
      this.listReviews = this.objReviews.reviews;
    })

    this.casasService.getObjDetalhe(this.id).subscribe(d => {
      this.objDetalhe = <Detalhes>d;
    })

    this.casasService.getObjFeatures(this.id).subscribe(f => {
      this.objFeatures = <Features>f;
      this.listFeatures = this.objFeatures.features;
    })
  }


}
