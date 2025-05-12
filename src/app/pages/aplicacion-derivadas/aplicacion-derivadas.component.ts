import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // <- IMPORTANTE
import { AplicacionDerivadasDataService } from '../../services/data/aplicacion-derivadas-data.service';


@Component({
  standalone: true,
  selector: 'app-aplicacion-derivadas',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './aplicacion-derivadas.component.html',
  styleUrl: './aplicacion-derivadas.component.scss'
})

export class AplicacionDerivadasComponent implements OnInit {

  contenido: any;
        
          constructor(private aplicacionderivadasService: AplicacionDerivadasDataService) {}
        
          ngOnInit(): void {
            this.aplicacionderivadasService.obtenerContenido().subscribe(data => {
              this.contenido = data;
            });
          }
}
