import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Headers } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://svcs.ebay.com/services/search/FindingService/v1';

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${url}`);
  }

  post(url: string, data: object): Observable<any> {
    return this.http.post(`${this.apiUrl}${url}`, data);
  }
}
