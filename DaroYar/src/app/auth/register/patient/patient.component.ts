import { Component, inject } from '@angular/core';
import { FarsiNumberPipe } from "../../../@shared/pipe/farsiNumber/farsi-number.pipe";
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { PanelService } from '../../../panel.service';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [FarsiNumberPipe,CommonModule,FormsModule, ReactiveFormsModule, NgPersianDatepickerModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent {
  formBuilder=inject(FormBuilder)
  registerForm:any
  submitted:boolean=false
  panelService=inject(PanelService)
  constructor(){
    this.createForm()
    this.addPatient()
  }
  addPatient(){
    this.type2.push(this.formBuilder.group({
      mobile: ['', Validators.required],

    }))
  }
  
  
  get type2(){
    return this.registerForm.get('type2') as FormArray
  }

  add(){
    console.log(this.registerForm.value);
    
    this.panelService.register(this.registerForm.value).subscribe({
      next: (data: any) => {
      },
      error:(err) => {
      }
    })
    console.log(this.registerForm);

  }


  createForm(){
    this.registerForm=this.formBuilder.group({
      codemeli:['', Validators.required],
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      Relatives_id:['', Validators.required],
      gender:['', Validators.required],
      birthday:['', Validators.required],
      password:['', Validators.required],
      address:['', Validators.required],
      role:['1', Validators.required],
      PatientId:[''],
      type2: this.formBuilder.array([]),
      bime:[]
    })
  }
}
