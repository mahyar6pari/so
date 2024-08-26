import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToastService } from '../@shared/service/toast/toast.service';
import { PanelService } from '../panel.service';
import { TokenService } from '../auth/token.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  toastService=inject(ToastService)
  panelService=inject(PanelService)
  tokenService=inject(TokenService)
  public token:any
 public user:any
  constructor(){
    this.token=this.tokenService.token()
    this.panelService.getMe().subscribe({
      next: (data: any) => {
        this.user=data
        }

      })
}
}