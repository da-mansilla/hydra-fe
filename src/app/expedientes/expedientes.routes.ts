import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./features/expediente-list/expediente-list.component'),
  },
  {
    path: 'new',
    loadComponent: () => import('./features/expediente-new/expediente-new.component'),
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
  {
    path: ':id/informacion',
    loadComponent: () => import('./features/expediente-information/expediente-information.component'),
  }

]  as Routes;