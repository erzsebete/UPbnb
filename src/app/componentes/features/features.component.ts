import {Component, Input, OnInit} from '@angular/core';
import {
  faCircleStop,
  faDog,
  faFireBurner,
  faSmoking, faTablet,
  faTemperatureLow,
  faTv,
  faWifi
} from "@fortawesome/free-solid-svg-icons";
import {CasasService} from "../../casas.service";
import {Feature, Features} from "../../interfaces";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  @Input() id!: number;

  allFeatures: string [] =
    ["petsAllowed", "tv", "washingMachine", "wifi", "airConditioner",
      "smokingAllowed", "fireplace", "microwave"]

  objfeat: Feature =
    {
      "petsAllowed": faDog,
      "tv": faTv,
      "washingMachine": faCircleStop,
      "wifi": faWifi,
      "airConditioner": faTemperatureLow,
      "smokingAllowed": faSmoking,
      "fireplace": faFireBurner,
      "microwave": faTablet
    }

  objFeatures = {} as Features;
  listFeatures: string [] = [];
  featuresInactive: string [] = [];

  constructor(public casasService: CasasService) {}

  ngOnInit(): void {
    this.casasService.getObjFeatures(this.id).subscribe(f => {
      this.objFeatures = f;
      this.listFeatures = this.objFeatures.features;
      this.featuresInactive = this.allFeatures.filter(x => !this.listFeatures.includes(x));
    })
  }
}
