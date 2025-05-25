import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WolframService {
  private readonly appId = 'GP4AQG-PLPPV9PJXW'; // Reemplázalo por tu App ID real
  private readonly endpoint = 'http://api.wolframalpha.com/v1/simple';

  constructor(private http: HttpClient) {}

  async consultar(query: string): Promise<string> {
    const url = `${this.endpoint}?i=${encodeURIComponent(query)}&appid=${this.appId}`;
    try {
      const respuesta = await firstValueFrom(this.http.get(url, { responseType: 'text' }));
      return respuesta;
    } catch (error) {
      return 'No se pudo obtener respuesta de Wolfram Alpha.';
    }
  }
}
