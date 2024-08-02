import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelService } from '../../../panel.service';

@Component({
  selector: 'app-pharmacist',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './pharmacist.component.html',
  styleUrl: './pharmacist.component.scss'
})
export class PharmacistComponent {
  formBulder=inject(FormBuilder)
  panelService=inject(PanelService)
  companyForm:any
  submitted:boolean=false
  constructor(){
    this.createForm()
  }

  add(){
    this.panelService.register(this.companyForm.value).subscribe({
      next: (data: any) => {
      },
      error:(err) => {
      }
    })
    console.log(this.companyForm);
  }

  createForm(){
    this.companyForm=this.formBulder.group({
      code:[''],
      name:[''],
      mobile:[''],
      role:['4']
    })
  }
}
