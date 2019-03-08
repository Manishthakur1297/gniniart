import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingdemoComponent } from '../testingdemo/testingdemo.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports : [TestingdemoComponent]
})
export class HelloModule { }
