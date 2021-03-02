import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RechargeComponent } from './recharge/recharge.component';
import { PaybillComponent } from './paybill/paybill.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
import { NewpostpaidComponent } from './newpostpaid/newpostpaid.component';
import { NewprepaidComponent } from './newprepaid/newprepaid.component';

const routes: Routes = [
  {path:'prepaid/prepaidplans',component:PrepaidplansComponent },
  {path:'prepaid/recharge', component:RechargeComponent},
  {path:'postpaid/postpaidplans',component: PostpaidplansComponent },
  {path:'postpaid/paybill', component: PaybillComponent},
  {path:'newconnection/newprepaid', component: NewprepaidComponent},
  {path: 'newconnection/newpostpaid', component: NewpostpaidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents=[ PrepaidplansComponent, RechargeComponent, PostpaidplansComponent,PaybillComponent,NewprepaidComponent,NewpostpaidComponent]; 