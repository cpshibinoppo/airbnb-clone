import { HostComponent } from './pages/host/host.component';
import { HostindroducionComponent } from './pages/hostindroducion/hostindroducion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HotaldetailComponent } from './pages/hotaldetail/hotaldetail.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'hotel',component:HotaldetailComponent,data:{test:true}},
  {path:'Hostindroducion',component:HostindroducionComponent},
  {path:'Host',component:HostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
