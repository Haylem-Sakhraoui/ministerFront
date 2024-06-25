import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employer} from '../../model/employee';
import { EmployeeRequest } from '../../model/employeeRequest';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8075/pfe/employer';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private addTokenToHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    if (token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    }
    return new HttpHeaders();
  }

  addEmployee(employeeRequest: EmployeeRequest): Observable<employer> {
    const url = `${this.apiUrl}/add`;
    const headers = this.addTokenToHeaders();
    return this.http.post<employer>(url, employeeRequest, { headers });
  }

  getAllEmployees(): Observable<employer[]> {
    const url = `${this.apiUrl}/all`;
    return this.http.get<employer[]>(url,  {
      headers: this.addTokenToHeaders()
    });
  }

  getEmployeeById(id: number): Observable<employer> {
    const url = `${this.apiUrl}/get?id=${id}`;
    const headers = this.addTokenToHeaders();
    return this.http.get<employer>(url, { headers });
  }

  deleteEmployee(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete?id=${id}`;
    const headers = this.addTokenToHeaders();
    return this.http.delete<void>(url, { headers });
  }

  updateEmployee(id: number, employeeRequest: EmployeeRequest): Observable<employer> {
    const url = `${this.apiUrl}/update/${id}`;
    const headers = this.addTokenToHeaders();
    return this.http.put<employer>(url, employeeRequest, { headers });
  }
}
