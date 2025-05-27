import { Component, OnInit, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { IaChatContainerComponent } from '../../components/ia-chat-container/ia-chat-container.component';
import { IaChatWidgetComponent } from '../../components/ia-chat-widget/ia-chat-widget.component';
import { AplicacionDerivadasDataService } from '../../services/data/aplicacion-derivadas-data.service';


@Component({
  standalone: true,
  selector: 'app-aplicacion-derivadas',
  imports: [CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule, 
    IaChatContainerComponent],
  templateUrl: './aplicacion-derivadas.component.html',
  styleUrl: './aplicacion-derivadas.component.scss'
})

export class AplicacionDerivadasComponent implements OnInit {

  contenido: any;
    @ViewChild(IaChatContainerComponent) chatContainer!: IaChatContainerComponent;

    constructor(private aplicacionderivadasService: AplicacionDerivadasDataService) {}
  
    ngOnInit(): void {
      this.aplicacionderivadasService.obtenerContenido().subscribe(data => {
        this.contenido = data;
        this.contenido.subtemas = data.subtemas
      });
    }
    comprobarConIA(ia: 'gemini' | 'symbolab' | 'wolfram', prompt: string) {
      this.chatContainer.abrir(ia);
      setTimeout(() => {
        this.chatContainer.enviarPrompt(ia, prompt);
      }, 100); // Espera a que el componente termine de abrirse
    }

    capitalize(text: string) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
}
