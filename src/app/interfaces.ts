
/*----- uma casa -----*/

import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

interface Casa {
  id: number,
  title: string,
  country: string,
  city: string,
  rating: number,
  price: number,
  host_type?: string,
  time?: string,
  featured_photo: string
}
export {Casa};


/*----- todas as casas com páginas -----*/

interface ListaCasas {
  page: number,
  total: string,
  pages: number,
  limit: string,
  data: Casa[]
}
export {ListaCasas};



/*----- Anfitrão -----*/

interface Host {
  name: string,
  photo: string,
  type: string,
  rating: number
}
export {Host};



/*----- uma review -----*/

interface Review {
  name: string,
  photo: string,
  date: string,
  comment: string
}
export {Review};


/*----- todas as reviews -----*/

interface Reviews
{
  reviews: Review[]
}
export {Reviews};


/*----- todas as fotos casa -----*/

interface Photos
{
  photos: string[]
}
export {Photos};


/*----- todos os detalhes -----*/

interface Detalhes
{
  id: number,
  title: string,
  country: string,
  city: string,
  rating: number,
  price: number,
  featured_photo: string
  description: string
}
export {Detalhes};


/*----- Lista features -----*/

interface Features
{
  features: []
}
export {Features};


/*----- Cada feature -----*/




interface Feature
{
 [key: string]  : IconDefinition ;
}
export {Feature}

