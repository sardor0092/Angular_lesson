import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';




import { MaterialModule } from './material/material.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterTab } from './router-tab/router-tab.directive';
import { RouterTabs } from './router-tab/router-tabs.directive';







@NgModule({
  imports: [ CommonModule, MaterialModule, RouterModule],
  declarations: [PagenotfoundComponent, RouterTabs, RouterTab ],

  exports: [
  
    CommonModule,
    RouterTabs,
    RouterTab
    
    

  ]
})
export class SharedModule {}
