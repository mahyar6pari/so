import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: "root"
  })
  export class AuthService{
    localstrongfull:boolean=true
    mytoken="token:"
    setTokenLocalStorage(token:string){
        localStorage.setItem(this.mytoken,token)
        this.localstrongfull=false
    }
    getTokenLocalStorage(){
        localStorage.getItem(this.mytoken)
    }
    clearTokenLocalStorage(){
        localStorage.removeItem(this.mytoken)
        this.localstrongfull=true
    }
    }
  