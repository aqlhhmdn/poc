import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http : HttpClient) {
    
   }
  
  public getApi(id: number){
    return this.http.get('https://onboardme-beta.celcom.com.my/api/postings/${id}');
  }

  // public getApi(id: number): Observable<Object>{
  //   return this.http.get('https://onboardme-beta.celcom.com.my/api/postings/${id}');
  // }
}
