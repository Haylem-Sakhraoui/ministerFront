import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Minister } from '../../model/minister';
import { MinisterRequest } from '../../model/ministerRequest';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MinisterService {
  private apiUrl = 'http://localhost:8075/pfe/minister';

  constructor(private authService:AuthService,private http: HttpClient){}

  private addTokenToHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    if (token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    }
    return new HttpHeaders();
  }

  addMinister(ministerRequest: MinisterRequest): Observable<Minister> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Minister>(url, ministerRequest, {
      headers: this.addTokenToHeaders()
    });
  }

  getAllMinisters(): Observable<Minister[]> {
    const url = `${this.apiUrl}/all`;
    return this.http.get<Minister[]>(url, {
      headers: this.addTokenToHeaders()
    });
  }

  getMinisterById(id: number): Observable<Minister> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Minister>(url, {
      headers: this.addTokenToHeaders()
    });
  }

  deleteMinister(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, {
      headers: this.addTokenToHeaders()
    });
  }

  updateMinister(id: number, ministerRequest: MinisterRequest): Observable<Minister> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<Minister>(url, ministerRequest, {
      headers: this.addTokenToHeaders()
    });
  }
}
