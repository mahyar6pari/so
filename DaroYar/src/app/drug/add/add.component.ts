import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarsiNumberPipe } from "../../@shared/pipe/farsiNumber/farsi-number.pipe";
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { PanelService } from '../../panel.service';
import { ToastService } from '../../@shared/service/toast/toast.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FarsiNumberPipe,NgPersianDatepickerModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  drugForm:any
  submitted:boolean=true
  status:any=true
  isLoading:any=true
  toastService=inject(ToastService)
  formBuilder=inject(FormBuilder)
  panelService=inject(PanelService)
  constructor(){
    this.createform()
  }

  adddrug(){
    console.log(this.drugForm.value);
    this.panelService.adddrug(this.drugForm.value).subscribe({
      next: ((data: any) => {
        console.log(data);
        
      })
    })
   
  }
createform(){
  this.drugForm=this.formBuilder.group({
    drug_name:[''],
    ATCC_code:[''],
    dosag_form:[''],
    strengh:[''],
    route_of_use:[''],
    ingredient:[''],
    access_level:[''],
    remarks:[''],
    date:[''],
    salt:[''],
    approved_clinical_indication:[''],
  })
}





}
