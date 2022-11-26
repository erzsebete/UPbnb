import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogoComponent} from "./catalogo/catalogo.component";
import {CasaComponent} from "./casa/casa.component";
import {FavoritosComponent} from "./favoritos/favoritos.component";
import {HomeComponent} from "./home/home.component";
import {DetalhesComponent} from "./detalhes/detalhes.component";
import {PessoaComponent} from "./pessoa/pessoa.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'casa', component: CasaComponent},
  {path: 'catalogo', component: CatalogoComponent},

  {path: 'detalhes/:id_casa', component: DetalhesComponent },
  {path: 'detalhes', component: DetalhesComponent },
  {path: 'pessoa', component: PessoaComponent},


  {path: 'favoritos', component: FavoritosComponent },
  {path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
