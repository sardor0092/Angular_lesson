import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
    



export class StateStorageService {



  private  previnousUrlKey = 'previnousUrl';


    constructor (){}
 
    storeUlr(url:string):void {
      sessionStorage.setItem(this.previnousUrlKey , url);
    }


    getUrl():string | null{
 
  return sessionStorage.getItem(this.previnousUrlKey) as unknown as string  | null;
 }


 clearUrl():void{
 
   sessionStorage.removeItem(this.previnousUrlKey);
 

}


    

} 