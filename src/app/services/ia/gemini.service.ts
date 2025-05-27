// src/app/services/gemini.service.ts
import { Injectable } from '@angular/core';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    this.genAI = new GoogleGenerativeAI('AIzaSyAgOYqYaTfjLNVoLmCbIT8n3k4FuOTqMMs');
    this.model = this.genAI.getGenerativeModel({
      model: 'gemma-3-12b-it',
      generationConfig: {
        temperature: 0.2,
        topK: 1,
        topP: 0.8,
        maxOutputTokens: 4024,
      },
      /*safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],*/


    });
  }

   /**
   * Envía el mensaje y transmite la respuesta por fragmentos
   * @param prompt El mensaje del usuario
   * @param onChunk Función callback que se llama con cada fragmento del texto
   */
  /*async enviarMensajeStream(prompt: string, onChunk: (chunk: string) => void): Promise<void> {
    const stream = await this.model.generateContentStream(prompt);
    for await (const chunk of stream.stream) {
      const part = chunk.text();
      if (part) {
        onChunk(part);
      }
    }
  }*/

    async enviarMensajeStream(prompt: string, onChunk: (chunk: string) => void): Promise<void> {
  const stream = await this.model.generateContentStream(prompt);
  let completo = '';

  for await (const chunk of stream.stream) {
    const part = chunk.text();
    if (part) completo += part;
  }

  const limpio = completo.replace(/\s{2,}/g, ' ').replace(/\n/g, '\n\n');
  onChunk(limpio);
}


  // Si quieres emitir el texto final limpio:
  // onChunk(buffer.trim());
}
