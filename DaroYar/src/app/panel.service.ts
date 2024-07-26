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
    listDrug(data:any) {
      return this.http.post(`http://localhost:4000/api/medicinename`,data)
  }
  getDrugById(id:any){
    return this.http.get(`http://localhost:4000/api/doctors`+id)
  }
  listPharmacy(data:any) {
    return this.http.post(`http://localhost:4000/api/companyname`,data)
}
getPharmacyById(id:any){
  return this.http.get(`http://localhost:4000/api/pharmacy`+id)
}
  listDoctor(data:any) {
    return this.http.post(`http://localhost:4000/api/doctorsname`,data)
}
  getDoctorById(id:any){
    return this.http.get(`http://localhost:4000/api/doctors`+id)
  }
  }