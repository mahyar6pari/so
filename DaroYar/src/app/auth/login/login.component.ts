import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PanelService } from '../../panel.service';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';
import { ToastService } from '../../@shared/service/toast/toast.service';

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
  toastService=inject(ToastService)
 
constructor( private cdr: ChangeDetectorRef){
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
          this.toastService.success(data.message)
          this.cdr.detectChanges()
          this.router.navigateByUrl('').then(() => {
            location.reload();
          });
        }

  
       
      },
      error:(err) => {
        console.log("erro",err.message	);
        this.toastService.error(err.error.message)
        this.cdr.detectChanges();
      }
    })
  }

  createForm(){
    this.loginForm=this.formBuilder.group({
      codemeli:['', Validators.required],
      password:['',Validators.required],
      role:['',Validators.required]
    })
  }
  
}
