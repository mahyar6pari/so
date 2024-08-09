import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { FarsiNumberPipe } from '../../@shared/pipe/farsiNumber/farsi-number.pipe';
import { ToastService } from '../../@shared/service/toast/toast.service';
import { PanelService } from '../../panel.service';
import { TokenService } from '../../auth/token.service';

@Component({
  selector: 'app-edit-relatives',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, FarsiNumberPipe, NgPersianDatepickerModule],
  templateUrl: './edit-relatives.component.html',
  styleUrl: './edit-relatives.component.scss'
})
export class EditRelativesComponent {
  formBuilder=inject(FormBuilder)
  panelService=inject(PanelService)
  toastService=inject(ToastService)
  submitted:boolean=false
  router=inject(Router)
  tokenService=inject(TokenService)
  public token:any

constructor(){
  this.token=this.tokenService.token()
  console.log("token",this.token);
  this.createForm2()
  this.addId()
  this.registerForm2.get('codemeli')?.setValue(this.token.codemeli)
  this.registerForm2.get('lastname')?.setValue(this.token.lastname)
  this.registerForm2.get('firstname')?.setValue(this.token.firstname)

}

submitfa(){
  console.log(this.registerForm2.value);
  
  this.panelService.registerrelatives(this.registerForm2.value).subscribe({
    next: (data: any) => {
      this.router.navigateByUrl('loginPage')
    },
    error:(err) => {
      this.toastService.error(err.error.message)
    }
  })
  console.log(this.registerForm2);
}

get type(){
  return this.registerForm2.get('type') as FormArray
}

addId(){

  this.type.push(this.formBuilder.group({
    id: ['', Validators.required],

  }))
}

registerForm2:any
  createForm2(){
    this.registerForm2=this.formBuilder.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      mobile:['', Validators.required],
      role:['relatives', Validators.required],
      user_id:[''],
      type: this.formBuilder.array([]),
      password:[''],
      codemeli:['']

    })
  }
}
