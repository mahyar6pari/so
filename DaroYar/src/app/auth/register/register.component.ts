import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PanelService } from '../../panel.service';
import { FarsiNumberPipe } from "../../@shared/pipe/farsiNumber/farsi-number.pipe";
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { Router } from '@angular/router';
import { ToastService } from '../../@shared/service/toast/toast.service';

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
  toastService=inject(ToastService)
  router=inject(Router)
constructor(){

}
 id:any=''

  checkValue2(event:any) {
    this.id=event.target.value
  }
submitform(){
  this.router.navigateByUrl(`register/`+this.id)
}
  

  
 


   



  
 
  registerForm2:any
  
  
}
