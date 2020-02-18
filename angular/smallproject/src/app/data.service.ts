import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from './post.model';

@Injectable
(
  {
  providedIn: 'root'
  }
)
export class DataService 
{
 
  
  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http : HttpClient) { }

  getData() : Observable<Iuser[]>
  {
    return this.http.get<Iuser[]>(this.url);
  }
}
