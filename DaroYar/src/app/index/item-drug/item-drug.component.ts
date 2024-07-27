import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PanelService } from '../../panel.service';

@Component({
  selector: 'app-item-drug',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './item-drug.component.html',
  styleUrl: './item-drug.component.scss'
})
export class ItemDrugComponent {
  activatedRoute=inject(ActivatedRoute)
  panelService=inject(PanelService)
  //{id:2,name:'بسته 100 عددی سرسوزن قلم انسولین 6mm گیج 31',company:'سلامت',image_url:'https://st.drnext.ir/prod.drnext.cbc//storage/market/products/500/92ee880b-a696-4147-aeb0-4cab606cab09.png',}
  drug:any={}
  drugId:string=''
  constructor(){
    this.drugId =this.activatedRoute.snapshot.paramMap.get('id')!
    this.getDrug(this.drugId)
  }

  getDrug(id:string){
    this.panelService.getDrugById((id)).subscribe({
      next: (data: any) => {
        this.drug=data
      },
      error:(err) => {

      }
    })
  }
}
