import { Component, inject } from '@angular/core';
import { FarsiNumberPipe } from "../../../@shared/pipe/farsiNumber/farsi-number.pipe";
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { PanelService } from '../../../panel.service';
import { Router } from '@angular/router';

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
  surance:any={}
  router=inject(Router)
  panelService=inject(PanelService)
  constructor(){
    this.createForm()
    this.addPatient()
    this.getEnsurance()
  }

  getEnsurance(){
    this.panelService.getensurance().subscribe({
      next: (data: any) => {
        console.log(data);
        
        this.surance=data
      },
      error:(err) => {
      }
    })
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
    
    this.panelService.registerpatient(this.registerForm.value).subscribe({
      next: (data: any) => {
        this.router.navigateByUrl('loginPage')
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
      relatives_id:['', Validators.required],
      gender:['', Validators.required],
      birthday:['', Validators.required],
      password:['', Validators.required],
      address:['', Validators.required],
      role:['patient', Validators.required],
      ensurance:['', Validators.required],
      type2: this.formBuilder.array([]),
      mobile:['']
    })
  }
}
