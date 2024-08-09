import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../@shared/service/toast/toast.service';
import { PanelService } from '../../panel.service';

@Component({
  selector: 'app-edit-pharmacist',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './edit-pharmacist.component.html',
  styleUrl: './edit-pharmacist.component.scss'
})
export class EditPharmacistComponent {
  formBulder=inject(FormBuilder)
  panelService=inject(PanelService)
  toastService=inject(ToastService)
  companyForm:any
  submitted:boolean=false
  router=inject(Router)
  constructor(){
    this.createForm()
  }

  add(){
    this.panelService.registercompany(this.companyForm.value).subscribe({
      next: (data: any) => {
        this.router.navigateByUrl('loginPage')
      },
      error:(err) => {
        this.toastService.error(err.error.message)
      }
    })
    console.log(this.companyForm);
  }

  createForm(){
    this.companyForm=this.formBulder.group({
      license_code:[''],
      firstname:[''],
      lastname:[''],
      mobile:[''],
      codemeli:[''],
      password:[''],
      role:['company']
      
    })
  }
}
