import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { UserComponent } from "./entity/user/user.component";
import { Lavozim } from "../shared/model/Lavozim";
import { DarsComponent } from "./entity/dars/dars.component";
import { UqituvchilarComponent } from "./entity/uqituvchilar/uqituvchilar.component";
import { UquvchilarComponent } from "./entity/uquvchilar/uquvchilar.component";
import { XonaComponent } from "./entity/xona/xona.component";



const routers:Routes = [

{
    path:'',
    component:LayoutComponent,
    children:[

        {
            path:'',
            redirectTo:"xona"
        },

        {
            path:'user',
            component:UserComponent,
            canActivate:[],
            data:{
                authorites:[Lavozim.ADMIN, Lavozim.DIREKTOR]
            }
        },

        {path:'dars' ,component:DarsComponent},
        {path:'oqituvchilar' ,component:UqituvchilarComponent},
        {path:'uquvchilar' ,component:UquvchilarComponent},
        {path:'xona' ,component:XonaComponent}
    
    

    ],


}



];








@NgModule({
    imports:[RouterModule.forChild(routers)],
    exports:[RouterModule]
})








export class AdminRoutingModule{}

