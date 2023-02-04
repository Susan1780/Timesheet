import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApsService {

  loginurl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0JlMSiH9S2rN7Ej-ajX9GF8ovQRVUSZ8';

  constructor(private route: Router, private http: HttpClient) { }

  isAuthenticated(): boolean {
    if (sessionStorage.getItem('token') !== null) {
      return true
    }
    return false
  }
  canAccess() {
    if (!this.isAuthenticated()) {
      this.route.navigate(['/login'])
    }
  }

  canAuthenticated() {
    if (this.isAuthenticated()) {
      this.route.navigate(['/home'])
    }
  }

  setTokenMethod(token: any) {
    sessionStorage.setItem('token', token)
  }

  loginmethod(form: any) {
    return this.http.post<{
      [x: string]: any; idToken: string
    }>(this.loginurl, form)
  }
}
