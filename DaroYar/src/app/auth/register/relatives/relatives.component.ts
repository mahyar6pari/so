import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { FarsiNumberPipe } from '../../../@shared/pipe/farsiNumber/farsi-number.pipe';
import { PanelService } from '../../../panel.service';

@Component({
  selector: 'app-relatives',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, FarsiNumberPipe, NgPersianDatepickerModule],
  templateUrl: './relatives.component.html',
  styleUrl: './relatives.component.scss'
})
export class RelativesComponent {
  formBuilder=inject(FormBuilder)
  panelService=inject(PanelService)
  submitted:boolean=false
constructor(){
  this.createForm2()
  this.addId()
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
      PatientId:[''],
      type: this.formBuilder.array([]),
      password:[''],
      codemeli:['']

    })
  }
}
