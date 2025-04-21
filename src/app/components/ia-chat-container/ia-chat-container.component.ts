// src/app/components/ia-chat-container.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IaChatWidgetComponent } from '../ia-chat-widget/ia-chat-widget.component';

@Component({
  selector: 'app-ia-chat-container',
  standalone: true,
  imports: [CommonModule, IaChatWidgetComponent],
  templateUrl: './ia-chat-container.component.html',
  styleUrls: ['./ia-chat-container.component.scss']
})
export class IaChatContainerComponent {
  chats = [
    {
      title: 'Gemini',
      color: '#2196f3',
      minimizedLabel: 'Gemini',
      offset: 0
    },
    {
      title: 'Symbolab',
      color: '#f44336',
      minimizedLabel: 'Symbolab',
      offset: 70
    },
    {
      title: 'Wolfram',
      color: '#ff9800',
      minimizedLabel: 'Wolfram',
      offset: 140
    }
  ];
}
