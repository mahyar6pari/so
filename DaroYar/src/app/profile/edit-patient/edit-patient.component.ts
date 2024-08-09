import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { FarsiNumberPipe } from '../../@shared/pipe/farsiNumber/farsi-number.pipe';
import { ToastService } from '../../@shared/service/toast/toast.service';
import { PanelService } from '../../panel.service';

@Component({
  selector: 'app-edit-patient',
  standalone: true,
  imports: [FarsiNumberPipe,CommonModule,FormsModule, ReactiveFormsModule, NgPersianDatepickerModule],
  templateUrl: './edit-patient.component.html',
  styleUrl: './edit-patient.component.scss'
})
export class EditPatientComponent {
  formBuilder=inject(FormBuilder)
  toastService=inject(ToastService)
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
        this.toastService.error(err.error.message)
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
        this.toastService.error(err.error.message)
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
