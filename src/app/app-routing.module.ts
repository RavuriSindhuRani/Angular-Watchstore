import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './component/addproducts/addproducts.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ViewproductsComponent } from './component/viewproducts/viewproducts.component';
import { ManageproductsComponent } from './component/manageproducts/manageproducts.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:DashboardComponent,
    children:[
      {path:'admin/add',component:AddproductsComponent},
      {path:'admin/view',component:ViewproductsComponent},
      {path:'admin/manage',component:ManageproductsComponent}
       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
