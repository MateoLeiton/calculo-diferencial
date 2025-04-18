import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IaToolsService } from '../../services/ia/ia-tools.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ia-tools',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './ia-tools.component.html',
  styleUrls: ['./ia-tools.component.scss']
})
export class IaToolsComponent {
  ejercicio: string = '';
  resultado: string = '';

  constructor(private iaService: IaToolsService) {}

  enviarEjercicio() {
    if (!this.ejercicio.trim()) return;

    this.iaService.verificarEjercicio(this.ejercicio).subscribe(res => {
      this.resultado = res;
    });
  }
}
