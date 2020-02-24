import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = "http://localhost:8080/api/v1/employee"
  constructor(private http: HttpClient) { }

  getEmployees() : Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }

  createEmployees(){

  }

  updateEmployees(){

  }

  deleteEmployees(){
    
  }
}
