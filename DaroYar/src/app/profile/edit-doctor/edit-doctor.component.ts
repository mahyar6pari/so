import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelService } from '../../panel.service';
import { Router } from '@angular/router';
import { ToastService } from '../../@shared/service/toast/toast.service';
import { CommonModule } from '@angular/common';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { FarsiNumberPipe } from '../../@shared/pipe/farsiNumber/farsi-number.pipe';

@Component({
  selector: 'app-edit-doctor',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgPersianDatepickerModule, FarsiNumberPipe],
  templateUrl: './edit-doctor.component.html',
  styleUrl: './edit-doctor.component.scss'
})
export class EditDoctorComponent {
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
      city:[''],
      code:[''],
      expertise:[''],
      address:[''],
      password:[''],
      lastname:[''],
      firstname:[''],
      hospital:[''],
      gender:[''],
      birthday:[''],
      codemeli:[''],
      role:['doctor']
    })
  }
}
