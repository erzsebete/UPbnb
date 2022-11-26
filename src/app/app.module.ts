import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CasaComponent } from './casa/casa.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CommonModule} from '@angular/common';
import { RouterLink} from "@angular/router";
import { FavoritosComponent } from './favoritos/favoritos.component';
import { HomeComponent } from './home/home.component';
import { FavoritoComponent } from './favorito/favorito.component';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(pt)

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CasaComponent,
    CatalogoComponent,
    FavoritosComponent,
    HomeComponent,
    FavoritoComponent
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
