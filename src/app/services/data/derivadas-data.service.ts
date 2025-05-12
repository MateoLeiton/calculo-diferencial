import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DerivadasDataService {
  private dataUrl = 'assets/data/derivadas.json';

  constructor(private http: HttpClient) {}

  obtenerContenido(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}

