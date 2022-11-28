import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogoComponent} from "./paginas/catalogo/catalogo.component";
import {CasaComponent} from "./componentes/casa/casa.component";
import {FavoritosComponent} from "./paginas/favoritos/favoritos.component";
import {HomeComponent} from "./paginas/home/home.component";
import {DetalhesComponent} from "./paginas/detalhes/detalhes.component";
import {PessoaComponent} from "./componentes/pessoa/pessoa.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'casa', component: CasaComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'detalhes/:id_casa', component: DetalhesComponent },

  {path: 'pessoa', component: PessoaComponent},

  {path: 'favoritos', component: FavoritosComponent },
  {path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
