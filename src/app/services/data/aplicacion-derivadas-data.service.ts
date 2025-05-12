import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AplicacionDerivadasDataService {
  private dataUrl = 'assets/data/aplicacion-derivadas.json';

  constructor(private http: HttpClient) {}

  obtenerContenido(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}



