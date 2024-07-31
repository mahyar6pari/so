import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';

import { PanelComponent } from './panel/panel.component';
import { AddPrescriptionComponent } from './user_panel/add-prescription/add-prescription.component';
import { DrugsComponent } from './index/drugs/drugs.component';
import { DoctorsComponent } from './index/doctors/doctors.component';
import { PharmacyComponent } from './index/pharmacy/pharmacy.component';
import { ItemDoctorComponent } from './index/item-doctor/item-doctor.component';
import { ItemPharmacyComponent } from './index/item-pharmacy/item-pharmacy.component';
import { ItemDrugComponent } from './index/item-drug/item-drug.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddComponent } from './drug/add/add.component';
import { ListComponent } from './drug/list/list.component';

export const routes: Routes = [
   
    {
        path:'',
        component:PanelComponent ,children:[
          {
            path: 'home',
            component: HomeComponent
        },
        {
            path:'register',
            component:RegisterComponent
        },
        {
          path:'register/:id',
          component:RegisterComponent
      },
        {
          path:'loginPage',
          component:LoginComponent
      },
      {
        path:'drugs',
        component:DrugsComponent
      },
      {
        path:'drugs/:id'
        ,
        component:ItemDrugComponent
       },
      {
        path:'doctors',
        component:DoctorsComponent  
      },
      {
        path:'doctor/:id'
        ,
        component:ItemDoctorComponent
       },
      {
        path:'pharmacy',
        component:PharmacyComponent
      },
      {
        path:'pharmacy/:id'
        ,
        component:ItemPharmacyComponent
       },
           {
            path:'prescription'
            ,
            component:AddPrescriptionComponent
           },
           {
           path:'drug/add'
           ,
           component:AddComponent
          },
          {
            path:'drug/list'
            ,
            component:ListComponent
           }
          
        ]
    },

];  
