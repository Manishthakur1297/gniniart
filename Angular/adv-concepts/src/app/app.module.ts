import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { MySquarePipe } from './my-square.pipe';
import { MyCubePipe } from './my-cube.pipe';
import { MyPowerPipe } from './my-power.pipe';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { HomeComponent } from './home/home.component';
import { CarComponent } from './car/car.component';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    PipedemoComponent,
    MySquarePipe,
    MyCubePipe,
    MyPowerPipe,
    DirectiveDemoComponent,
    HomeComponent,
    CarComponent,
    PersonalComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
