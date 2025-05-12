import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // <- IMPORTANTE
import { DerivadasDataService } from '../../services/data/derivadas-data.service';

@Component({
  standalone: true,
  selector: 'app-derivadas',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './derivadas.component.html',
  styleUrl: './derivadas.component.scss'
})
export class DerivadasComponent implements OnInit{

   contenido: any;
      
        constructor(private derivadasService: DerivadasDataService) {}
      
        ngOnInit(): void {
          this.derivadasService.obtenerContenido().subscribe(data => {
            this.contenido = data;
          });
        }
}
