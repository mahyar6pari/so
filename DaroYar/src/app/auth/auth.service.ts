import { Injectable} from "@angular/core";

@Injectable({
    providedIn: "root"
  })
  export class AuthService{
    localstrongfull:boolean=true
    mytoken="Authorization:"
    token:any=''
    setTokenLocalStorage(token:string){
        token=token
        localStorage.setItem(this.mytoken,token)
        this.localstrongfull=false
    }
    getTokenLocalStorage(){
         return localStorage.getItem(this.mytoken)
    }
    clearTokenLocalStorage(){
        localStorage.removeItem(this.mytoken)
        this.localstrongfull=true
    }
    }
  