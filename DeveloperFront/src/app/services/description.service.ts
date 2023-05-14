import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Description} from "../models/description";

const baseUrl = 'http://localhost:4200/api';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Description[]> {
    return this.http.get<Description[]>(baseUrl);
  }

  get(id: any): Observable<Description> {
    return this.http.get<Description>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Description[]> {
    return this.http.get<Description[]>(`${baseUrl}?title=${title}`);
  }
}
