import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Detalhes, Features, Host, ListaCasas, Photos, Reviews} from "./interfaces";

const BASE_URL = "https://m9-frontend.upskill.appx.pt/upbnb/casas"


@Injectable({
  providedIn: 'root'
})

export class CasasService {

  constructor(private http: HttpClient) { }

  listaFav: number [] = JSON.parse(localStorage.getItem("favoritos") || "[]");


  getFavoritos()
  {
    return this.http.get<ListaCasas>(BASE_URL + "/?&ids=" + this.listaFav);
  }


  getObjCurrent() {
    return this.http.get<ListaCasas>(BASE_URL + "/current");
  }

  getObjPast() {
    return this.http.get<ListaCasas>(BASE_URL + "/past");
  }

  getObjDetalhe(id:number) {
    return this.http.get<Detalhes>(BASE_URL + "/" + id);
  }


  getObjHost(id:number) {
    return this.http.get<Host>(BASE_URL + "/"+ id +"/host");
  }

  getObjReviews (id:number) {
    return this.http.get<Reviews>(BASE_URL + "/"+ id +"/reviews");
  }

  getObjFeatures (id:number) {
    return this.http.get<Features>(BASE_URL + "/"+ id +"/features");
  }

  getPhotos (id:number)
  {
    return this.http.get<Photos>(BASE_URL + "/"+ id +"/photos");
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

  getsearchListaPage (id:number, frase:string)
  {
    return this.http.get<ListaCasas>(BASE_URL + "?page=" + id + "&search=" + frase);
  }

}


