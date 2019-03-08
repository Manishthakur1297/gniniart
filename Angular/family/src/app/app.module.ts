import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatherComponent } from './father/father.component';
import { FirstchildComponent } from './father/firstchild/firstchild.component';
import { SecondchildComponent } from './father/firstchild/secondchild.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    FirstchildComponent,
    SecondchildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FatherComponent]
})
export class AppModule { }
