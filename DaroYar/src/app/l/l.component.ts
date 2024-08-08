import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PanelService } from '../panel.service';
import { RouterModule } from '@angular/router';
import { FarsiNumberPipe } from "../@shared/pipe/farsiNumber/farsi-number.pipe";
import { NgbModule } from '@deliverysolutions/ng-bootstrap';
import { ToastService } from '../@shared/service/toast/toast.service';

@Component({
  selector: 'app-l',
  standalone: true,
  imports: [CommonModule, RouterModule, FarsiNumberPipe,NgbModule,],
  templateUrl: './l.component.html',
  styleUrl: './l.component.scss'
})
export class LComponent {
  panelService=inject(PanelService)
  toastService=inject(ToastService)
  status:boolean=false
  pageForIndex = 0
  page:number = 1;
  countItemPerPage: any = 3;
  totalCount=10
  constructor(){
    this.listdrug()
    if (this.drugList.length==0) {
      this.status=true
    }
    else{
      this.status=false
    }

  }
  

  drugList:any=[]
  getDrug(event?: any) {
    let data={
      "drug_name":event.target.value
    }
        this.panelService.searchMedicine(data).subscribe({
          next: ((data: any) => {
            console.log(data);
            
            this.drugList=data 
            console.log(this.drugList[0].value.image_url);
            if (this.drugList.length==0) {
              this.status=true
            }
            else{
              this.status=false
            }
          })
        })
    }


    listdrug(event?:number){
      this.page = 1
      if (event) {
        this.page = event
      }
      this.panelService.listDrug(this.page).subscribe((data: any) => {
        console.log(data);
        
        this.drugList = data;

        if (this.drugList.length==0) {
          this.status=true
          
        }
        else{
          this.status=false
          this.pageForIndex = this.page - 1
        }
      })
    }
}
