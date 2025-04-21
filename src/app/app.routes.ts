import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'inicio',
        loadComponent: () =>
          import('./pages/inicio/inicio.component').then(m => m.InicioComponent),
      },
      {
        path: 'funciones',
        loadComponent: () =>
          import('./pages/funciones/funciones.component').then(m => m.FuncionesComponent),
      },
      {
        path: 'limites',
        loadComponent: () =>
          import('./pages/limites/limites.component').then(m => m.LimitesComponent),
      },
      {
        path: 'derivadas',
        loadComponent: () =>
          import('./pages/derivadas/derivadas.component').then(m => m.DerivadasComponent),
      },
      {
        path: 'aplicacion-derivadas',
        loadComponent: () =>
          import('./pages/aplicacion-derivadas/aplicacion-derivadas.component').then(m => m.AplicacionDerivadasComponent),
      },
      {
        path: 'informacion',
        loadComponent: () =>
          import('./pages/informacion/informacion.component').then(m => m.InformacionComponent),
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      {
        path: 'ia-tools',
        loadComponent: () => import('./components/ia-tools/ia-tools.component').then(m => m.IaToolsComponent)
      },

      {
        path: 'ia-widget',
        loadComponent: () => import('./components/ia-chat-widget/ia-chat-widget.component').then(m => m.IaChatWidgetComponent)
      },
      {
        path: 'ia-chat',
        loadComponent: () => import('./components/ia-chat-container/ia-chat-container.component').then(m => m.IaChatContainerComponent)
      }

    ],
  },
];
