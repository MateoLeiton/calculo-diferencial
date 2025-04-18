import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IaToolsService {

  constructor() {}

  verificarEjercicio(ejercicio: string): Observable<string> {
    // Simulación de procesamiento IA (respuesta genérica de prueba)
    const respuesta = `Resultado simulado para: "${ejercicio}". Esta es una respuesta generada como ejemplo.`;
    return of(respuesta);
  }
}
