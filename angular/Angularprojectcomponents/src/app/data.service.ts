import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url = "../assets/data/employee.json"
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any[]>{
    return this.http.get<any[]>(this._url)
  }
}
