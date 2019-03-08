import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { LogService } from './log.service';
import { DbService } from './db.service';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { Log1Service } from './log1.service';
import { Db1Service } from './db1.service';
import { TestingdemoComponent } from './testingdemo/testingdemo.component';
import { HelloModule } from './hello/hello.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    TestingdemoComponent
  ],
  imports: [
    BrowserModule,HelloModule
  ],
  providers: [LogService,DbService,Log1Service,Db1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
