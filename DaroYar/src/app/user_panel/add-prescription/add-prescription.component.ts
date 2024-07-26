import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserpanelService } from '../userpanel.service';


@Component({
  selector: 'app-add-prescription',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './add-prescription.component.html',
  styleUrl: './add-prescription.component.scss'
})
export class AddPrescriptionComponent {
  formBuilder=inject(FormBuilder)
  userpanelService=inject(UserpanelService)

  addPrescription(){
    this.userpanelService.addPrescription(this.prescription_form.value).subscribe({
      next: (data: any) => {
      },
      error:(err) => {
      }
    })
    console.log(this.prescription_form);
  }
  
  prescription_form:any
  createForm(){
    this.prescription_form=this.formBuilder.group({
      id:['']
    })
  }
}
