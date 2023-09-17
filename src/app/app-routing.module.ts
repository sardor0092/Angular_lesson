import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';

const routes: Routes = [

 
  {
    path:'',
    loadChildren:()=>
    import('./public/public.module').then((m)=>m.PublicModule),
  },
  {
    path:'admin',
    loadChildren:()=>
    import('./admin/admin.module').then((m)=>m.AdminModule)
  },
  {
path:'login',
loadChildren:() =>
import('./login/login.module').then((m)=>m.LoginModule)
  },


  {path:'**',component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
