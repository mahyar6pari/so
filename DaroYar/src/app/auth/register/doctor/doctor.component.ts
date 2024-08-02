import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { FarsiNumberPipe } from "../../../@shared/pipe/farsiNumber/farsi-number.pipe";
import { PanelService } from '../../../panel.service';

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
  constructor(){
    this.createForm()
  }

  add(){
    this.panelService.register(this.doctorForm.value).subscribe({
      next: (data: any) => {
      },
      error:(err) => {
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
      role:['1']
    })
  }
}
