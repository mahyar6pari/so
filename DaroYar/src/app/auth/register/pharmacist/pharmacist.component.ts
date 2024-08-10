import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PanelService } from '../../../panel.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../@shared/service/toast/toast.service';

@Component({
  selector: 'app-pharmacist',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './pharmacist.component.html',
  styleUrl: './pharmacist.component.scss'
})
export class PharmacistComponent {
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
    this.submitted=true
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
      license_code:['', Validators.required],
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      mobile:['', Validators.required],
      codemeli:['', Validators.required],
      password:['', Validators.required],
      role:['company', Validators.required]
      
    })
  }
}
