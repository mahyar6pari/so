import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PanelService } from '../../panel.service';
import { AuthService } from '../auth.service';

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
  authService=inject(AuthService)
  router=inject(Router)
constructor(){
  this.createForm()
 
  
}
  loginForm:any
  
  submit(){
    this.panelService.login(this.loginForm.value).subscribe({
      next: (data: any) => {
        if (data!='PasswordIsWrong' && data!='NotAccount') {
          this.authService.setTokenLocalStorage(data as string)
          this.router.navigateByUrl('home')
        }
        else if(data=='PasswordIsWrong'){
          window.alert("Password Is Wrong")
        }
        else if(data=='NotAccount'){
          window.alert("Not Account")
        }
      },
      error:(err) => {
      }
    })

  }

  createForm(){
    this.loginForm=this.formBuilder.group({
      nationalId:[''],
      password:[''],
    })
  }
  
}
