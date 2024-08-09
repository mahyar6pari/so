import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PanelService } from '../../panel.service';
import { ToastService } from '../../@shared/service/toast/toast.service';

@Component({
  selector: 'app-item-doctor',
  standalone: true,
  imports: [CommonModule,RouterModule,],
  templateUrl: './item-doctor.component.html',
  styleUrl: './item-doctor.component.scss'
})
export class ItemDoctorComponent {
  activatedRoute=inject(ActivatedRoute)
  toastService=inject(ToastService)
  panelService=inject(PanelService)
  //{firstname:'علی',lastname:'شش پری',city:'تهران',address:'تهران - تهران، خیابان شریعتی، بالاتر از میرداماد، کوچه فلسفی، پلاک 5، ساختمان پرشین، طبقه 5 ( پایین تر از ایستگاه مترو دکتر شریعتی)',hospital:'پاستور',gender:'مرد',image_url:'https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/NmyZYRf2dK3rtj8UAk2ZA7EhxUM9QwBB87YKYJky.jpg'}
  doctor:any={}
  doctorId:string=''
  constructor(){
    this.doctorId =this.activatedRoute.snapshot.paramMap.get('id')!
    this.getDoctor(this.doctorId)
  }

  getDoctor(id:string){
    this.panelService.getDoctorById((id)).subscribe({
      next: (data: any) => {
        this.doctor=data
      },
      error:(err) => {

      }
    })
  }
}
