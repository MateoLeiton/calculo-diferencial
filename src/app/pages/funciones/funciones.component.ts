import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // <- IMPORTANTE
import { FuncionesDataService } from '../../services/data/funciones-data.service';

@Component({
  selector: 'app-funciones',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.scss']
})
export class FuncionesComponent implements OnInit {
  contenido: any;

  constructor(private funcionesService: FuncionesDataService) {}

  ngOnInit(): void {
    this.funcionesService.obtenerContenido().subscribe(data => {
      this.contenido = data;
    });
  }
}
