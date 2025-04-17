import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FuncionesComponent } from './pages/funciones/funciones.component';
import { LimitesComponent } from './pages/limites/limites.component';
import { ContinuidadComponent } from './pages/continuidad/continuidad.component';
import { DerivadasComponent } from './pages/derivadas/derivadas.component';
import { LayoutComponent } from './pages/layout/layout.component';




export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'funciones', component: FuncionesComponent },
      { path: 'limites', component: LimitesComponent },
      { path: 'continuidad', component: ContinuidadComponent },
      { path: 'derivadas', component: DerivadasComponent },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    ],
  },
];
