import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material/material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './admin/entity/user/user.component';
import { AuthInterceptor } from './shared/auth-interceptor';
import { CoreModule } from './core/core-module';
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
     UserComponent
 
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,    
    CoreModule,
    SharedModule,
   
    
  ],
  providers: [


    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } 
    
    },


   
       { provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor , multi:true}
    

  
    
  

    
  ],
  bootstrap: [AppComponent]
})








export class AppModule { }
