import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { MaterialModule } from "../shared/material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { XonaComponent } from './entity/xona/xona.component';
import { UqituvchilarComponent } from './entity/uqituvchilar/uqituvchilar.component';
import { UquvchilarComponent } from './entity/uquvchilar/uquvchilar.component';
import { DarsComponent } from './entity/dars/dars.component';
import { UserComponent } from './entity/user/user.component';

@NgModule({
declarations:[

      LayoutComponent,
      HeaderComponent,
      SidenavComponent,
      XonaComponent,
      UqituvchilarComponent,
      UquvchilarComponent,
      DarsComponent,
      


 
  ],


imports:[
CommonModule,
AdminRoutingModule,
MaterialModule ,
FormsModule,
ReactiveFormsModule

]


})








export class AdminModule{}