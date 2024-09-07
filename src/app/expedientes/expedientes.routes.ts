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
]  as Routes;