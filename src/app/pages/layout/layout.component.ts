import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { map } from 'rxjs/operators';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    RouterModule,
    NgIf,
    LayoutModule
  ]
})
export class LayoutComponent {
  isHandset: boolean = false;
  subtemasPorModulo: { [modulo: string]: any[] } = {};

  constructor(
    private breakpointObserver: BreakpointObserver,
    private http: HttpClient
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(map(result => result.matches))
      .subscribe(isHandset => (this.isHandset = isHandset));

    this.cargarSubtemas();
  }

  cargarSubtemas() {
    const modulos = ['funciones', 'limites', 'derivadas', 'aplicacion-derivadas'];

    modulos.forEach(modulo => {
      this.http.get<any>(`assets/data/${modulo}.json`).subscribe(data => {
        this.subtemasPorModulo[modulo] = data.subtemas || [];
      });
    });
  }

  closeDrawerIfHandset() {
    // lógica opcional para cerrar el sidenav en dispositivos móviles
  }
}
