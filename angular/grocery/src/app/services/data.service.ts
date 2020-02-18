import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _baseurl = "http://apolis-grocery.herokuapp.com/api/"
  private _categoryurl ="category"
  constructor(private http: HttpClient) { }

  getData() : Observable<any>
  {
    return this.http.get<any>(this._baseurl + this._categoryurl)
  }
}
