import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { OwnerComponent } from './owner/owner.component';
import { LoguinComponent } from './loguin/loguin.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'user',component:UserComponent},
  {path:'borrower',component:BorrowerComponent},
  {path:'owner',component:OwnerComponent},
  {path:'loguin',component:LoguinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
