import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ia-chat-widget',
  standalone: true,
  imports: [CommonModule, DragDropModule],
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

  @HostListener('mousedown')
  bringToFront() {
    IaChatWidgetComponent.currentMaxZ++;
    this.zIndex = IaChatWidgetComponent.currentMaxZ;
  }

  cerrar() {
    this.close.emit();
  }
}
