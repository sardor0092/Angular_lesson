import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { RouterModule } from "@angular/router";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";



@NgModule({

    imports:[CommonModule,MaterialModule,RouterModule],
    declarations:[PagenotfoundComponent],
    exports:[
        CommonModule,
        PagenotfoundComponent
    ]
    
})







export class SharedModule{}