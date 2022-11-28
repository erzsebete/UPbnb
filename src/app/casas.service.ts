import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Casa} from "./interfaces";

const BASE_URL = "https://m9-frontend.upskill.appx.pt/upbnb/casas"


@Injectable({
  providedIn: 'root'
})

export class CasasService {


  constructor(private http: HttpClient) { }

  listaFav: number [] = JSON.parse(localStorage.getItem("favoritos") || "[]");

  getListaPage(id:number) {
    return this.http.get(BASE_URL + "?page=" + id);
  }

  getObjCurrent() {
    return this.http.get(BASE_URL + "/current");
  }

  getObjPast() {
    return this.http.get(BASE_URL + "/past");
  }

  getObjDetalhe(id:number) {
    return this.http.get(BASE_URL + "/" + id);
  }


  getObjHost(id:number) {
    return this.http.get(BASE_URL + "/"+ id +"/host");
  }

  getObjReviews (id:number) {
    return this.http.get(BASE_URL + "/"+ id +"/reviews");
  }

  getObjFeatures (id:number) {
    return this.http.get(BASE_URL + "/"+ id +"/features");
  }

  toggleFavorite(id:number) {

    if (this.isFavorite(id))
    {
      this.listaFav.splice(this.listaFav.indexOf(id), 1);
      this.guardarLocalStorage();
    }
    else
    {
      this.listaFav.push(id)
      this.guardarLocalStorage()
    }
  }

  isFavorite(id:number) {
    return this.listaFav.includes(id);
  }

  guardarLocalStorage ()
  {
    localStorage.setItem("favoritos", JSON.stringify(this.listaFav));
  }

}


