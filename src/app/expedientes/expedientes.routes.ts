import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./features/expediente-list/expediente-list.component'),
  },
  {
    path: ':id',
    loadComponent: () => import('./features/expediente-details/expediente-details.component'),
  },
  {
    path: ':id/status',
    loadComponent: () => import('./features/expediente-status/expediente-status.component'),
  },
  {
    path: ':id/documentacion',
    loadComponent: () => import('./features/expediente-documentacion/expediente-documentacion.component'),
  },

]  as Routes;