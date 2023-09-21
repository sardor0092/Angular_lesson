import { Injectable } from '@angular/core';
import { User } from '../shared/model/user';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class AccauntService {




  private userIdentity:User | null = null;

  private authenticationState =  new ReplaySubject<User | null >(1);
  private userCache$?:Observable<User | null>;

  private baseApi =  environment.baseUrl + "/api/account";


  constructor(private http:HttpClient ,
    private router:Router) { }

    save(user:User):Observable<{}>{
      return this.http.post(this.baseApi , user)
    }
 
    authenticate(identity:User | null):void{
      this.userIdentity = identity;
      this.authenticationState.next(this.userIdentity);
    }
 
    hasAnyAuthority(lavozimlar:string[] | string):boolean{
      if(!this.userIdentity){
        return false;
      }
      if(!Array.isArray(lavozimlar)) {
        lavozimlar = [lavozimlar];
      }
      
      return this.userIdentity.lavozimlar.some((lavozim:string)=> lavozimlar.includes(lavozim));
    }


    
 
     






  
}
