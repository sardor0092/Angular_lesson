import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";



const routers:Routes = [

{
    path:'',
    component:LayoutComponent,
    children:[

        {
            path:'',
            redirectTo:"xona"
        }
    
    

    ]


}



]








@NgModule({
    imports:[RouterModule.forChild(routers)],
    exports:[RouterModule]
})








export class AdminRoutingModule{}

