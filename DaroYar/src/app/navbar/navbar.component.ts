import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, LoginComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public authService=inject(AuthService)
  router=inject(Router)

  drugslist(){
    
  }
  logout(){
    this.authService.clearTokenLocalStorage()

   }
}
