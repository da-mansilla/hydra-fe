import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import LoginComponent from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'expedientes',
        loadChildren: () => import('./expedientes/expedientes.routes'),
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '**',
        redirectTo: '',
      },
];
