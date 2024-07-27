import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PanelService } from '../../panel.service';
import { FarsiNumberPipe } from "../../@shared/pipe/farsiNumber/farsi-number.pipe";
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, FarsiNumberPipe, NgPersianDatepickerModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  formBuilder=inject(FormBuilder)
  panelService=inject(PanelService)
  router=inject(Router)
  submitted:boolean=false
  registerForm:any
  test:boolean=true
constructor(){
  this.createForm() 
  this.createForm2()
  if (this.registerForm.value.role==2 || this.registerForm.value.role==3) {
   
    this.test=false
  }
}
 id:any=0
submitform(){
  if (this.registerForm.value.role) {
    this.id=this.registerForm.value.role
    this.registerForm2.value.role=this.registerForm.value.role
    this.router.navigateByUrl(`register/`+this.registerForm.value.role)
    this.test=true
  }
  else{
    this.router.navigateByUrl(`register`)
    this.test=true
  }
  if (this.registerForm.value.role==2 || this.registerForm.value.role==3) {
    this.test=false
  }
  console.log(this.test);
}
  
  submit(){
    console.log(this.registerForm.value);
    
    this.panelService.register(this.registerForm.value).subscribe({
      next: (data: any) => {
      },
      error:(err) => {
      }
    })
    console.log(this.registerForm);
  }
  addId(){

    this.type.push(this.formBuilder.group({
      id: ['', Validators.required],

    }))
  }
  checkValue2(event: any) {
    if (event == '3') {
      this.type.push(this.formBuilder.group({
        id: ['', Validators.required],
      }))
    }else{
      this.type.clear()
    }
    if (event == '2') {
      this.type2.push(this.formBuilder.group({
        mobile: ['', Validators.required],
      }))
    }else{
      this.type2.clear()
    }

  }
  submitfa(){
    console.log(this.registerForm2.value);
    
    this.panelService.register(this.registerForm2.value).subscribe({
      next: (data: any) => {
      },
      error:(err) => {
      }
    })
    console.log(this.registerForm2);
  }
  addPatient(){

    this.type2.push(this.formBuilder.group({
      mobile: ['', Validators.required],

    }))
  }


   

  get type2(){
    return this.registerForm.get('type2') as FormArray
  }

  get type(){
    return this.registerForm2.get('type') as FormArray
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
      role:['', Validators.required],
      PatientId:[''],
      type2: this.formBuilder.array([]),
    })
  }
  registerForm2:any
  createForm2(){
    this.registerForm2=this.formBuilder.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      mobile:['', Validators.required],
      role:['', Validators.required],
      PatientId:[''],
      type: this.formBuilder.array([]),
    })
  }
  
}
