import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
  export class PanelService {
    http=inject(HttpClient)
    login(data:any) {
        return this.http.post(`http://localhost:4000/api/auth/login`,data)
    }
    register(data:any) {
      return this.http.post(`http://localhost:4000/api/auth/register`,data)
  }


    //////index
    listDrug() {
      return this.http.get(`http://localhost:4444/api/medicinename`)
  }
  getDrugById(id:any){
    return this.http.get(`http://localhost:4444/api/medicineById`+id)
  }
  searchMedicine(data:any){
    return this.http.post(`http://localhost:4444/api/searchmedicine`,data)
  }

  listPharmacy() {
    return this.http.get(`http://localhost:4000/api/companyname`)
}
getPharmacyById(id:any){
  return this.http.get(`http://localhost:4000/api/pharmacy`+id)
}

  listDoctor() {
    return this.http.get(`http://localhost:4444/api/doctorsname`)
}
  getDoctorById(id:any){
    return this.http.get(`http://localhost:4444/api/doctorspatients`+id)
  }
  searchDoctors(data:any){
    return this.http.post(`http://localhost:4444/api/searchdoctors`,data)
  }
  }