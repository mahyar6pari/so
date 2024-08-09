import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PanelService } from '../../panel.service';
import { ToastService } from '../../@shared/service/toast/toast.service';

@Component({
  selector: 'app-item-drug',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './item-drug.component.html',
  styleUrl: './item-drug.component.scss'
})
export class ItemDrugComponent {
  activatedRoute=inject(ActivatedRoute)
  toastService=inject(ToastService)
  panelService=inject(PanelService)
  //{id:2,name:'بسته 100 عددی سرسوزن قلم انسولین 6mm گیج 31',company:'سلامت',image_url:'https://st.drnext.ir/prod.drnext.cbc//storage/market/products/500/92ee880b-a696-4147-aeb0-4cab606cab09.png',}
  drug:any={}
  drugId:string=''
  image:any
  constructor(){
    this.drugId =this.activatedRoute.snapshot.paramMap.get('id')!
    console.log("drugId",this.drugId);
    this.getDrug(this.drugId)
    this.getimage(this.drugId)
  }

  getDrug(id:string){
    console.log("id",id);
    this.panelService.getDrugById((id)).subscribe({
      next: (data: any) => {
        console.log("data",data);
        
        this.drug=data
      },
      error:(err) => {

      }
    },)
  }
  getimage(id:any){
    this.panelService.getimageById((id)).subscribe({
      next: (data: any) => {
        console.log("data",data);
        
        this.image=data
      },
      error:(err) => {

      }
    },)
  }
}
