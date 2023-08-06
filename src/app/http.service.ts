import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  getApi(): Observable<Data[]> {
    return this.http.get<Data[]>(
      'https://onboardme-beta.celcom.com.my/api/postings'
    );
  }

  saveApi(data: any) {
    return this.http.post(
      'https://onboardme-beta.celcom.com.my/api/postings',
      data
    );
  }
  // public getApi(id: number): Observable<Object>{
  //   return this.http.get('https://onboardme-beta.celcom.com.my/api/postings/${id}');
  // }
}
