// src/app/components/ia-chat-widget/ia-chat-widget.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-ia-chat-widget',
  templateUrl: './ia-chat-widget.component.html',
  styleUrls: ['./ia-chat-widget.component.scss']
})
export class IaChatWidgetComponent {
  @Input() title: string = 'IA';
  @Input() color: string = '#2196f3';
  @Input() minimizedLabel: string = 'IA';

  isOpen = false;

  toggleChat() {
    this.isOpen = !this.isOpen;
  }
}
