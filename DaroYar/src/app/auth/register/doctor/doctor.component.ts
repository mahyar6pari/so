import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { FarsiNumberPipe } from "../../../@shared/pipe/farsiNumber/farsi-number.pipe";
import { PanelService } from '../../../panel.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../@shared/service/toast/toast.service';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgPersianDatepickerModule, FarsiNumberPipe],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss'
})
export class DoctorComponent {
  formBuilder=inject(FormBuilder)
  panelService=inject(PanelService)
  doctorForm:any
  submitted:boolean=false
  router=inject(Router)
  toastService=inject(ToastService)
  constructor(){
    this.createForm()
  }

  add(){
    this.submitted=true
    this.panelService.registerdoctor(this.doctorForm.value).subscribe({
      next: (data: any) => {
        this.router.navigateByUrl('loginPage')
      },
      error:(err) => {
        this.toastService.error(err.error.message)
      }
    })
    console.log(this.doctorForm);

  }
  createForm(){
    this.doctorForm=this.formBuilder.group({
      city:['', Validators.required],
      code:['', Validators.required],
      expertise:['', Validators.required],
      address:['', Validators.required],
      password:['', Validators.required],
      lastname:['', Validators.required],
      firstname:['', Validators.required],
      hospital:['', Validators.required],
      gender:['', Validators.required],
      birthday:['', Validators.required],
      codemeli:['', Validators.required],
      role:['DOCTOR', Validators.required]
    })
  }
}
