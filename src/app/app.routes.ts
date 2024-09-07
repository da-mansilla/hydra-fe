import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'expedientes',
        loadChildren: () => import('./expedientes/expedientes.routes'),
    },
    {
        path: '**',
        redirectTo: '',
      },
];
