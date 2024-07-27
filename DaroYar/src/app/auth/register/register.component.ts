import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PanelService } from '../../panel.service';
import { FarsiNumberPipe } from "../../@shared/pipe/farsiNumber/farsi-number.pipe";
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';

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
  submitted:boolean=false
  registerForm:any
constructor(){
  this.createForm() 
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

  addPatient(){

    this.type2.push(this.formBuilder.group({
      mobile: ['', Validators.required],

    }))
  }


   

  get type2(){
    return this.registerForm.get('type2') as FormArray
  }

  get type(){
    return this.registerForm.get('type') as FormArray
  }
  
  createForm(){
    this.registerForm=this.formBuilder.group({
      codemeli:['', Validators.required],
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      mobile:['', Validators.required],
      gender:['', Validators.required],
      birthday:['', Validators.required],
      password:['', Validators.required],
      address:['', Validators.required],
      role:['', Validators.required],
      PatientId:[''],
      type: this.formBuilder.array([]),
      type2: this.formBuilder.array([]),
    })
  }
  
}
