import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2 } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { TokenService } from '../auth/token.service';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
  public authService=inject(AuthService)
  tokenService=inject(TokenService)
  router=inject(Router)
  user:any
  public token:any
  constructor(private renderer: Renderer2){
    this.token=this.tokenService.token()
    console.log(this.token);
    
  }
  getFile(){

  }

  logout(){
    this.authService.clearTokenLocalStorage()
    this.router.navigateByUrl('')
    location.reload()
    
  }
}
