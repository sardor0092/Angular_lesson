import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register/register.component";
import { NgModule } from "@angular/core";


const routers:Routes = [

    {
        path:'',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    }

];

@NgModule({

    imports:[RouterModule.forChild(routers)],
    exports:[RouterModule]

})








export class  LoginRoutingModule {

}