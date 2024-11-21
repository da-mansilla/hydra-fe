import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./features/solicitantes-home/solicitantes-home.component'),
  },
  {
    path: 'expedientes',
    loadComponent: () => import('./features/solicitantes-expedientes/solicitantes-expedientes.component'),
  },
  {
    path: 'expedientes/:id',
    loadComponent: () => import('./features/solicitantes-expedientes-detail/solicitantes-expedientes-detail.component'),
  },
  {
    path: 'expedientes/documentacion/:id',
    loadComponent: () => import('./features/solicitantes-expedientes-documentacion/solicitantes-expedientes-documentacion.component'),
  },
  {
    path: 'expedientes/:id/information',
    loadComponent: () => import('./features/solicitantes-expedientes-information/solicitantes-expedientes-information'),
  }
]  as Routes;
