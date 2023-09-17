import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routers:Routes = [


     
     {
        path:'' ,redirectTo:'/home' ,pathMatch:'full'
     },
      
     {
        path:'home',
        component:HomeComponent,
        data:{icon:'home', text:"Bosh sahifa"}
     }

    
]
    
    @NgModule({
        imports:[RouterModule.forChild(routers)],
        exports:[RouterModule]
    })
    
    



export class PublicRoutingModule{    }