import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RollNumberComponent } from './roll-number/roll-number.component';
import { CodePipe } from './code.pipe';
import { NamePipe } from './name.pipe';
import { YearPipe } from './year.pipe';
import { BranchPipe } from './branch.pipe';
import { RollPipe } from './roll.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RollNumberComponent,
    CodePipe,
    NamePipe,
    YearPipe,
    BranchPipe,
    RollPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
