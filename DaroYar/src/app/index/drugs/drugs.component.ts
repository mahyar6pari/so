import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PanelService } from '../../panel.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-drugs',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './drugs.component.html',
  styleUrl: './drugs.component.scss'
})
export class DrugsComponent {
  panelService=inject(PanelService)
  status:boolean=false
    constructor(){
    this.listdrug()
    if (this.drugList.length==0) {
      this.status=true
    }
    else{
      this.status=false
    }
  }//{id:2,name:'بسته 100 عددی سرسوزن قلم انسولین 6mm گیج 31',company:'سلامت',image_url:'https://st.drnext.ir/prod.drnext.cbc//storage/market/products/500/92ee880b-a696-4147-aeb0-4cab606cab09.png'},{id:2,name:'بسته 100 عددی سرسوزن قلم انسولین 6mm گیج 31',company:'سلامت',image_url:'https://st.drnext.ir/prod.drnext.cbc//storage/market/products/500/92ee880b-a696-4147-aeb0-4cab606cab09.png'},{id:2,name:'بسته 100 عددی سرسوزن قلم انسولین 6mm گیج 31',company:'سلامت',image_url:'https://st.drnext.ir/prod.drnext.cbc//storage/market/products/500/92ee880b-a696-4147-aeb0-4cab606cab09.png'},
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
    getDrugbyname(event?: any) {
      let data={
        "ATCC_code":event.target.value
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
    
  listdrug(){

    this.panelService.listDrug().subscribe((data: any) => {
      console.log(data);
      
      this.drugList = data;
      if (this.drugList.length==0) {
        this.status=true
      }
      else{
        this.status=false
      }
    })
  }
}
