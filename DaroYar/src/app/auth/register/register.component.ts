import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
      mobile:['', Validators.required],
      gender:['', Validators.required],
      birthday:['', Validators.required]
    })
  }
  
}
