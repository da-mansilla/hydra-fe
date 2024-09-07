import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./features/expediente-list/expediente-list.component'),
  },
]  as Routes;