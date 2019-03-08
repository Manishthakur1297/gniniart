import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { ServicesComponent } from './home/services/services.component';
import { CarloanComponent } from './home/services/carloan/carloan.component';
import { HomeloanComponent } from './home/services/carloan/homeloan.component';
import { PersonalloanComponent } from './home/services/carloan/personalloan.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { AccountComponent } from './home/services/account/account.component';
import { DepositComponent } from './home/services/deposit/deposit.component';
import { CardsComponent } from './home/services/cards/cards.component';
import { LifecycleComponent } from './home/lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent,
    CarloanComponent,
    HomeloanComponent,
    PersonalloanComponent,
    AboutComponent,
    ContactComponent,
    AccountComponent,
    DepositComponent,
    CardsComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent,NavbarComponent]
})
export class AppModule { }
