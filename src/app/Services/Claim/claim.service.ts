import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Claim } from '../../model/claim';
import { ClaimRequest } from '../../model/claimRequest';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  private apiUrl = 'http://localhost:8075/pfe/claim';

  constructor(private authService:AuthService,private http: HttpClient) {}

  private addTokenToHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    if (token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    }
    return new HttpHeaders();
  }

  addClaim(claimRequest: ClaimRequest): Observable<Claim> {
    const url = `${this.apiUrl}/add`;
    const headers = this.addTokenToHeaders();
    return this.http.post<Claim>(url, claimRequest, { headers });
  }

  getAllClaims(): Observable<Claim[]> {
    const url = `${this.apiUrl}/get-all`;
    const headers = this.addTokenToHeaders();
    return this.http.get<Claim[]>(url, { headers });
  }

  getClaimById(id: number): Observable<Claim> {
    const url = `${this.apiUrl}/get?id=${id}`;
    const headers = this.addTokenToHeaders();
    return this.http.get<Claim>(url, { headers });
  }

  deleteClaim(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete?id=${id}`;
    const headers = this.addTokenToHeaders();
    return this.http.delete<void>(url, { headers });
  }

  updateContentClaim(id: number, claimRequest: ClaimRequest): Observable<Claim> {
    const url = `${this.apiUrl}/updateContent/${id}`;
    const headers = this.addTokenToHeaders();
    return this.http.put<Claim>(url, claimRequest, { headers });
  }

  updateStatusClaim(id: number, claimRequest: ClaimRequest): Observable<Claim> {
    const url = `${this.apiUrl}/updateStatus/${id}`;
    const headers = this.addTokenToHeaders();
    return this.http.put<Claim>(url, claimRequest, { headers });
  }
}
