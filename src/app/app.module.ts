import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TwoColumnsComponent } from './components/two-columns/two-columns.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ListPlanesComponent } from './components/list-planes/list-planes.component';
import { InscricaoPlanoComponent } from './components/inscricao-plano/inscricao-plano.component';
import { DivulgacaoComponent } from './components/divulgacao/divulgacao.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TwoColumnsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LandingPageComponent,
    ListPlanesComponent,
    InscricaoPlanoComponent,
    DivulgacaoComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
