import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../shared/material/material.module";
import { PublicRoutingModule } from "./public-rounting.module";


@NgModule({
declarations:[
    HomeComponent
],

imports:[
    CommonModule ,
    PublicRoutingModule,
    MaterialModule
],

bootstrap:[HomeComponent]

})






export class PublicModule{}