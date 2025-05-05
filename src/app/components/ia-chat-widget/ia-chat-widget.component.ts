import { Component, Input, HostListener } from '@angular/core';
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
  @Input() title: string = 'IA';
  @Input() color: string = '#2196f3';
  @Input() minimizedLabel: string = 'IA';
  
  isOpen = false;
  width = 300;
  height = 400;

  zIndex = 1;
  static currentMaxZ = 1;

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.bringToFront();
    }
  }

  @HostListener('mousedown')
  bringToFront() {
    IaChatWidgetComponent.currentMaxZ++;
    this.zIndex = IaChatWidgetComponent.currentMaxZ;
  }

  initResize(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  
    const startX = event.clientX;
    const startY = event.clientY;
    const startWidth = this.width;
    const startHeight = this.height;
  
    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      this.width = startWidth + (moveEvent.clientX - startX);
      this.height = startHeight + (moveEvent.clientY - startY);
    };
  
    const mouseUpHandler = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };
  
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  }
  

}
