import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2 } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
  public authService=inject(AuthService)
  user:any
  constructor(private renderer: Renderer2){
    
  }


  logout(){
    this.authService.clearTokenLocalStorage()
  }
}
