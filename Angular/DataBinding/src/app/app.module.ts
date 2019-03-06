import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplatereferenceComponent } from './templatereference/templatereference.component';
import { CustompropertyComponent } from './customproperty/customproperty.component';
import { MypowerfunctionComponent } from './mypowerfunction/mypowerfunction.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventbindingComponent,
    TemplatereferenceComponent,
    CustompropertyComponent,
    MypowerfunctionComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
