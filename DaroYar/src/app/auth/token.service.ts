import { inject, Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: "root"
  })
  export class TokenService{
     authService=inject(AuthService)
     decoded:any
     token(){
      if (this.authService.getTokenLocalStorage()) {
     return this.decoded=jwtDecode(this.authService.getTokenLocalStorage() as string);  
      }
      else{
        return this.decoded=''
      }
      
 
     }
     
    }
