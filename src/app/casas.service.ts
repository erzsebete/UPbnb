import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Casa} from "./interfaces";

const BASE_URL = "https://m9-frontend.upskill.appx.pt/upbnb/casas"


@Injectable({
  providedIn: 'root'
})

export class CasasService {


  constructor(private http: HttpClient) { }

  getListaPage(id:number) {
    return this.http.get(BASE_URL + "?page=" + id);
  }

  getObjCurrent() {
    return this.http.get(BASE_URL + "/current");
  }

  getObjPast() {
    return this.http.get(BASE_URL + "/past");
  }
}


