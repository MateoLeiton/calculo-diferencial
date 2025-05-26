//ia-chat-container.component.ts
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IaChatWidgetComponent } from '../ia-chat-widget/ia-chat-widget.component'; 

@Component({
  selector: 'app-ia-chat-container',
  standalone: true,
  imports: [CommonModule, IaChatWidgetComponent], // ✅ importa el componente
  templateUrl: './ia-chat-container.component.html',
  styleUrls: ['./ia-chat-container.component.scss']
})
export class IaChatContainerComponent {
  mostrar = {
    gemini: false,
    symbolab: false,
    wolfram: false
  };

  abrir(id: 'gemini' | 'symbolab' | 'wolfram') {
    this.mostrar[id] = true;
  }

  cerrar(id: 'gemini' | 'symbolab' | 'wolfram') {
    this.mostrar[id] = false;
  }

  get mostrarChats(): boolean {
    return !this.mostrar.gemini && !this.mostrar.symbolab && !this.mostrar.wolfram;
  }

  @ViewChild('geminiWidget') geminiWidget?: IaChatWidgetComponent;
  @ViewChild('symbolabWidget') symbolabWidget?: IaChatWidgetComponent;
  @ViewChild('wolframWidget') wolframWidget?: IaChatWidgetComponent;

enviarPrompt(ia: 'gemini' | 'symbolab' | 'wolfram', prompt: string) {
  const target = {
    gemini: this.geminiWidget,
    symbolab: this.symbolabWidget,
    wolfram: this.wolframWidget
  }[ia];

  if (target) {
    target.recibirPrompt(prompt);
  }
}
/*enviarPrompt(ia: 'gemini' | 'symbolab' | 'wolfram', prompt: string) {
  const widgetRef = document.querySelector(`app-ia-chat-widget[iaType="${ia}"]`) as any;
  if (widgetRef?.component) {
    widgetRef.component.recibirPrompt(prompt);
  }
}*/



  
}
