import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserpanelService {
  http=inject(HttpClient)
  addPrescription(data:any) {
      return this.http.post(`http://localhost:4000/api/add/prescription`,data)
  }
}
