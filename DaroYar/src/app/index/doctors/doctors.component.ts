import { Component, inject } from '@angular/core';
import { PanelService } from '../../panel.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})
export class DoctorsComponent {
  panelService=inject(PanelService)
  status:boolean=false
    constructor(){
    this.getDoctor()
    if (this.doctorList.length==0) {
      this.status=true
    }
    else{
      this.status=false
    }
  }
  //{id:2,firstname:'علی',lastname:'شش پری',city:'تهران',address:'تهران - تهران، خیابان شریعتی، بالاتر از میرداماد، کوچه فلسفی، پلاک 5، ساختمان پرشین، طبقه 5 ( پایین تر از ایستگاه مترو دکتر شریعتی)',hospital:'پاستور',gender:'مرد',image_url:'https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/NmyZYRf2dK3rtj8UAk2ZA7EhxUM9QwBB87YKYJky.jpg'},{id:2,firstname:'علی',lastname:'شش پری',city:'تهران',address:'تهران - تهران، خیابان شریعتی، بالاتر از میرداماد، کوچه فلسفی، پلاک 5، ساختمان پرشین، طبقه 5 ( پایین تر از ایستگاه مترو دکتر شریعتی)',hospital:'پاستور',gender:'مرد',image_url:'https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/NmyZYRf2dK3rtj8UAk2ZA7EhxUM9QwBB87YKYJky.jpg'},{id:2,firstname:'علی',lastname:'شش پری',city:'تهران',address:'تهران - تهران، خیابان شریعتی، بالاتر از میرداماد، کوچه فلسفی، پلاک 5، ساختمان پرشین، طبقه 5 ( پایین تر از ایستگاه مترو دکتر شریعتی)',hospital:'پاستور',gender:'مرد',image_url:'https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/NmyZYRf2dK3rtj8UAk2ZA7EhxUM9QwBB87YKYJky.jpg'}
  doctorList:any=[]
  getDoctor(event?: any) {
    let data={
      "expertise":event.target.value
    }
        this.panelService.listDoctor(data).subscribe({
          next: ((data: any) => {
            console.log('salaaaa' , data);
            this.doctorList=data
     
              
          })
        })
        if (this.doctorList.length==0) {
          this.status=true
        }
        else{
          this.status=false
        }
    }
    listdrug(){
      let data={
        "expertise":''
      }
      this.panelService.listDoctor(data).subscribe((data: any) => {
        console.log(data);
        
        this.doctorList = data;
      })
    }

}
