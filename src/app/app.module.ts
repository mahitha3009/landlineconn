import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
//import { RechargeComponent } from './recharge/recharge.component';
//import { PaybillComponent } from './paybill/paybill.component';
//import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
//import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
//import { NewpostpaidComponent } from './newpostpaid/newpostpaid.component';
//import { NewprepaidComponent } from './newprepaid/newprepaid.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
