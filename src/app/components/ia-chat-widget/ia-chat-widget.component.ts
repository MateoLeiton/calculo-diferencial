// src/app/components/ia-chat-widget/ia-chat-widget.component.ts
import { Component, Input, Output, EventEmitter, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../../services/ia/gemini.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface MensajeChat {
  emisor: 'usuario' | 'ia';
  texto: string;
  esImagen?: boolean;
}

@Component({
  selector: 'app-ia-chat-widget',
  standalone: true,
  imports: [CommonModule, DragDropModule, FormsModule],
  templateUrl: './ia-chat-widget.component.html',
  styleUrls: ['./ia-chat-widget.component.scss']
})
export class IaChatWidgetComponent {
  @Input() title = 'IA';
  @Input() color = '#2196f3';
  @Input() minimizedLabel = 'IA';
  @Input() iaType: 'gemini' | 'symbolab' | 'wolfram' = 'gemini';
  @Output() close = new EventEmitter<void>();

  private geminiService = inject(GeminiService);
  private sanitizer = inject(DomSanitizer);

  zIndex = 1;
  static currentMaxZ = 1;

  mensaje: string = '';
  mensajes: MensajeChat[] = [];

  @HostListener('mousedown')
  bringToFront() {
    IaChatWidgetComponent.currentMaxZ++;
    this.zIndex = IaChatWidgetComponent.currentMaxZ;
  }

  cerrar() {
    this.close.emit();
  }

  async enviarMensaje() {
    if (!this.mensaje.trim()) return;

    this.mensajes.push({ emisor: 'usuario', texto: this.mensaje });
    const index = this.mensajes.push({ emisor: 'ia', texto: 'Cargando...' }) - 1;

    try {
      if (this.iaType === 'gemini') {
        await this.geminiService.enviarMensajeStream(this.mensaje, (chunk) => {
          this.mensajes[index].texto += chunk;
        });
      } else if (this.iaType === 'wolfram') {
        const appid = 'GP4AQG-PLPPV9PJXW';
        const query = encodeURIComponent(this.mensaje);
        const imageUrl = `https://api.wolframalpha.com/v1/simple?appid=${appid}&i=${query}&width=400&background=F5F5F5&foreground=black`;
        this.mensajes[index] = {
          emisor: 'ia',
          texto: imageUrl,
          esImagen: true
        };
      } else {
        this.mensajes[index].texto = 'IA no implementada todavía.';
      }
    } catch (error) {
      this.mensajes[index].texto = 'Error al consultar la IA';
    }

    this.mensaje = '';
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
