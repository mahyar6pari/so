import { Component, inject } from '@angular/core';
import { PanelService } from '../../panel.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastService } from '../../@shared/service/toast/toast.service';

@Component({
  selector: 'app-pharmacy',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './pharmacy.component.html',
  styleUrl: './pharmacy.component.scss'
})
export class PharmacyComponent {
  panelService=inject(PanelService)
  toastService=inject(ToastService)
  status:boolean=false
    constructor(){
    this.listPharmacy()
    if (this.pharmacyList.length==0) {
      this.status=true
    }
    else{
      this.status=false
    }
  }
  pharmacyList:any=[]
  getPharmacy(event?: any) {
    let data={
      "destination":event.target.value
    }
        this.panelService.listPharmacy().subscribe({
          next: ((data: any) => {
            this.pharmacyList=data  
          })
        })
        if (this.pharmacyList.length==0) {
          this.status=true
        }
        else{
          this.status=false
        }
    }
    
  listPharmacy(){
    let data={
      "destination":''
    }
    this.panelService.listPharmacy().subscribe((data: any) => {
      this.pharmacyList = data.data;
    })
  }
}
