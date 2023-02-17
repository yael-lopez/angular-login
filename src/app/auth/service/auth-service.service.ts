import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private url: string = "http://localhost/backend";

  constructor(private http: HttpClient) { }

  registro(user: string, password: string, rol: number): Observable<any> {
    const url: string = `${this.url}/registro.php`;
    return this.http.post(url, { user, password, rol } );
  }

  login(user: string, password: string): Observable<any> {
    const url: string = `${this.url}/login.php`;
    return this.http.post(url, { user, password } );
  }


}
