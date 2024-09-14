import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./features/solicitantes-home/solicitantes-home.component'),
  },
  {
    path: 'expedientes',
    loadComponent: () => import('./features/solicitantes-expedientes/solicitantes-expedientes.component'),
  }
]  as Routes;