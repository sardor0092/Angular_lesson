import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtUtil } from '../core/jwt.util';
import { HttpClient } from '@angular/common/http';
import { AccauntService } from '../core/accaunt.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   api = environment.baseUrl+"/api/account";






  constructor(public jwtUtil:JwtUtil , public http:HttpClient,
     public accauntService:AccauntService) { }

     
}
