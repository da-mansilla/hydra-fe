import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import LoginComponent from './login/login.component';
import { authGuard } from './auth.guard';
import { LogoutComponent } from './login/logout.component';

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
        path: 'logout',
        component: LogoutComponent,
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
