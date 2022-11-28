import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CasaComponent } from './componentes/casa/casa.component';
import { CatalogoComponent } from './paginas/catalogo/catalogo.component';
import { CommonModule} from '@angular/common';
import { RouterLink} from "@angular/router";
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { HomeComponent } from './paginas/home/home.component';
import { FavoritoComponent } from './componentes/favorito/favorito.component';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DetalhesComponent } from './paginas/detalhes/detalhes.component';
import { PessoaComponent } from './componentes/pessoa/pessoa.component';

registerLocaleData(pt)

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CasaComponent,
    CatalogoComponent,
    FavoritosComponent,
    HomeComponent,
    FavoritoComponent,
    DetalhesComponent,
    PessoaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterLink,
    CommonModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
