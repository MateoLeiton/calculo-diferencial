import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // <- IMPORTANTE
import { LimitesDataService } from '../../services/data/limites-data.service';

@Component({
  standalone: true,
  selector: 'app-limites',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './limites.component.html',
  styleUrl: './limites.component.scss'
})
export class LimitesComponent implements OnInit{

    contenido: any;
    
      constructor(private limitesService: LimitesDataService) {}
    
      ngOnInit(): void {
        this.limitesService.obtenerContenido().subscribe(data => {
          this.contenido = data;
        });
      }
}
