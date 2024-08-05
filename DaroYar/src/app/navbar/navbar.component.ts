import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2 } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { AuthService } from '../auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenService } from '../auth/token.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, LoginComponent,CommonModule,RouterModule,ReactiveFormsModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public authService=inject(AuthService)
  tokenService=inject(TokenService)
  router=inject(Router)
  user:any
  public token:any
  constructor(private renderer: Renderer2){
    this.token=this.tokenService.token()
    console.log(this.token);
    
  }
    selectedItem: number = -1; // مقدار پیش‌فرض (مثلاً هیچ آیتمی انتخاب نشده)
  
    selectItem(index: number) {
      this.selectedItem = index;
    }
  getFile(){

  }

  logout(){
    this.authService.clearTokenLocalStorage()
    this.router.navigateByUrl('')
    location.reload()
    
  }
}
