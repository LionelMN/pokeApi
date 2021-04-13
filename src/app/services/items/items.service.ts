import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  url : string = "https://pokeapi.co/api/v2/item"

  constructor(private http : HttpClient) { }

  public getAllItems() : Observable<any>{
    return this.http.get(`${this.url}?offset=0&limit=954`) as Observable<any>
  }

  public getItem(url) : Observable<any>{
    return this.http.get(url)
  }
}
