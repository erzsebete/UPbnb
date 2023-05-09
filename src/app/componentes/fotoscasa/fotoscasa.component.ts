import {Component, Input, OnInit} from '@angular/core';
import {Photos} from "../../interfaces";
import {CasasService} from "../../casas.service";


@Component({
  selector: 'app-fotoscasa',
  templateUrl: './fotoscasa.component.html',
  styleUrls: ['./fotoscasa.component.scss']
})
export class FotoscasaComponent implements OnInit {
  @Input() id!: number;

  objPhotos = {} as Photos;
  listPhotos: string [] = [];

  bigPhoto?: string;

  constructor(public casasService: CasasService) {
  }

  ngOnInit(): void {
    this.casasService.getPhotos(this.id).subscribe(ph => {
      this.objPhotos = ph;
      this.listPhotos = this.objPhotos.photos.slice(1);
    })
  }

  clickEvent(ph?: string) {
    this.bigPhoto = this.bigPhoto ? undefined : ph;
  }
}

