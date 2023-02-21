import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  private url: string = "http://localhost/backend";

  constructor(private http: HttpClient) { }

  guardar(nombre: string, inicio: string, fin: string, horas:number, costo: number): Observable<any> {
    const url: string = `${this.url}/agregar.php`;
    return this.http.post(url, { nombre, inicio, fin, horas, costo } );
  }

  listar(){
    const url: string = `${this.url}/listar.php`;
    return this.http.get(url);
  }

  delete(id:number): Observable<any>{
    const url: string = `${this.url}/delete.php`;
    return this.http.post(url, { id } );
  }

  buscar(id:any): Observable<any>{
    const url: string = `${this.url}/buscar.php`;
    return this.http.post(url, { id } );
  }

  actualizar(nombre: string, inicio: string, fin: string, horas:number, costo: number, id:any): Observable<any> {
    const url: string = `${this.url}/actualizar.php`;
    return this.http.post(url, { nombre, inicio, fin, horas, costo, id } );
  }
  
}
