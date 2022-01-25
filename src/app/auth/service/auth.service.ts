import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUserInterface';
import { RegisterRequestInterface } from '../components/types/registerRequest.interface';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from '../components/types/authResponse.interface';
import { LoginRequestInterface } from '../components/types/loginRequestInterface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http
      .post<AuthResponseInterface>(
        `${environment.apiUrl}/users`,
        data,
        httpOptions
      )
      .pipe(map((response) => response.user));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    return this.http
      .post<AuthResponseInterface>(
        `${environment.apiUrl}/users/login`,
        data,
        httpOptions
      )
      .pipe(map((responce) => responce.user));
  }
}
