import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogoComponent} from "./catalogo/catalogo.component";
import {CasaComponent} from "./casa/casa.component";

const routes: Routes = [
  {path: '', redirectTo: '/catalogo', pathMatch: 'full'},
  {path: 'casa', component: CasaComponent},
  {path: 'catalogo', component: CatalogoComponent},
  /*{path: 'detalhes/:id_casa', component: DetalhesComponent },
  {path: 'favoritos', component: FavoritosComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
