// src/app/components/ia-chat-widget/ia-chat-widget.component.ts
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

interface MensajeChat {
  emisor: 'usuario' | 'ia';
  texto: string;
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
  @Output() close = new EventEmitter<void>();

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

  enviarMensaje() {
    if (!this.mensaje.trim()) return;

    this.mensajes.push({ emisor: 'usuario', texto: this.mensaje });

    // Mensaje simulado de la IA (placeholder para futura integración)
    this.mensajes.push({ emisor: 'ia', texto: 'Procesando tu solicitud...' });

    this.mensaje = '';
  }
}
