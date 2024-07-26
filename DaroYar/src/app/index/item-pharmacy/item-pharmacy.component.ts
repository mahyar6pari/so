import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PanelService } from '../../panel.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-pharmacy',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './item-pharmacy.component.html',
  styleUrl: './item-pharmacy.component.scss'
})
export class ItemPharmacyComponent {
  activatedRoute=inject(ActivatedRoute)
  panelService=inject(PanelService)
  pharmacy:any
  pharmacyId:string=''
  constructor(){
    this.pharmacyId =this.activatedRoute.snapshot.paramMap.get('id')!
    this.getPharmacy(this.pharmacyId)
  }

  getPharmacy(id:string){
    this.panelService.getPharmacyById((id)).subscribe({
      next: (data: any) => {
        this.pharmacy=data.data
      },
      error:(err) => {

      }
    })
  }
}
