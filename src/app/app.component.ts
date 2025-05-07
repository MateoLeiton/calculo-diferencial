// src/app/app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IaChatContainerComponent } from './components/ia-chat-container/ia-chat-container.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, IaChatContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculo-diferencial';

  constructor(public router: Router) {}

  get showIaChats(): boolean {
    return [
      '/funciones',
      '/limites',
      '/derivadas',
      '/aplicacion-derivadas'
    ].includes(this.router.url);
  }
}
