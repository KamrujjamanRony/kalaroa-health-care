import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http: HttpClient) { }

  addDoctor(model: any | FormData): Observable<void>{
    return this.http.post<void>(`${environment.baseApi}/Doctor`, model)
  }

  getAllDoctor(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseApi}/Doctor`);
  }

  getCompanyDoctor(): Observable<any[]> {
    return this.getAllDoctor().pipe(
      map(Doctor => Doctor.filter(a => a.companyID === environment.hospitalCode))
    );
  }

  getDoctor(id: any): Observable<any>{
    return this.http.get<any>(`${environment.baseApi}/Doctor/GetDoctorById?id=${id}`);
  }

  updateDoctor(id: any, updateDoctorRequest: any | FormData): Observable<any>{
    return this.http.put<any>(`${environment.baseApi}/Doctor/EditDoctor/${id}`, updateDoctorRequest);
  }

  deleteDoctor(id: any): Observable<any>{
    return this.http.delete<any>(`${environment.baseApi}/Doctor/DeleteDoctor?id=${id}`);
  } 
}
