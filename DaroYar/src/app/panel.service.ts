import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { GenericHttpService } from "./auth/generic-http.service";

@Injectable({
    providedIn: 'root',
  })
  export class PanelService {
    http=inject(HttpClient)
    genericHttpService=inject(GenericHttpService)
    login(data:any) {
        return this.http.post(`http://localhost:1111/api/auth/login`,data)
    }
    register(data:any) {
      return this.http.post(`http://localhost:1111/api/auth/register`,data)
  }


    //////index
    listDrug() {
      return this.http.get(`http://localhost:1111/api/medicinename`)
  }
  getDrugById(id:any){
    return this.http.get(`http://localhost:1111/api/medicine/`+id)
  }
  searchMedicine(data:any){
    return this.http.post(`http://localhost:1111/api/searchmedicine`,data)
  }

  listPharmacy() {
    return this.http.get(`http://localhost:4000/api/companyname`)
}
getPharmacyById(id:any){
  return this.http.get(`http://localhost:4000/api/pharmacy`+id)
}

  listDoctor() {
    return this.http.get(`http://localhost:1111/api/doctorsname`)
}
  getDoctorById(id:any){
    return this.http.get(`http://localhost:1111/api/doctor/`+id)
  }
  getimageById(ATCC_code:any){
    return this.http.get(`http://localhost:1111/api/medicinepicture/`+ATCC_code)
  }
  searchDoctors(data:any){
    return this.http.post(`http://localhost:1111/api/searchdoctors`,data)
  }

  ///////drug/////
  adddrug(data:any){
    return this.http.post(`http://localhost:1111/api/addmedicine`,data)
  }
  updatedrug(ATCC_code:any,data:any){
    return this.http.put(`http://localhost:1111/api/deletemedicine/`+ATCC_code,data)
  }
  deletdrug(ATCC_code:any){
    return this.http.delete(`http://localhost:1111/api/searchdoctors`+ATCC_code)
  }
  }