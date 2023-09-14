import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { MaterialModule } from "../shared/material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { XonaComponent } from './entity/xona/xona.component';

@NgModule({
declarations:[

    LayoutComponent,
      HeaderComponent,
      SidenavComponent,
      XonaComponent


 
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