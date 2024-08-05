import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PanelService } from '../../panel.service';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive, NavbarComponent]
})
export class LoginComponent {
  formBuilder=inject(FormBuilder)
  panelService=inject(PanelService)
  tokenService=inject(TokenService)
  authService=inject(AuthService)
  router=inject(Router)
constructor(){
  this.createForm()



  
  
}
  loginForm:any
  id:any=''

  checkValue2(event:any) {
    this.id=event.target.value
  }
  submit(){
    console.log(this.loginForm.value);
    
    this.panelService.login(this.loginForm.value).subscribe({
      next: (data: any) => {
        if (data.token) {
          console.log(data);
          this.authService.setTokenLocalStorage(data.token as string)
          location.reload()
        }
          
  
       
      },
      error:(err) => {
      }
    })

    
  }

  createForm(){
    this.loginForm=this.formBuilder.group({
      codemeli:[''],
      password:[''],
      role:['']
    })
  }
  
}
