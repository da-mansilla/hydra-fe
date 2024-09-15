import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import LoginComponent from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [authGuard],
    },
    {
        path: 'expedientes',
        loadChildren: () => import('./expedientes/expedientes.routes'),
        canActivate: [authGuard],
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'solicitantes',
        loadChildren: () => import('./solicitantes/solicitantes.routes'),
        canActivate: [authGuard],
    },
    {
        path: '**',
        redirectTo: '',
      },
];
