import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './shared/services/users.service';

export const authGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService);
  const router = inject(Router);

  try {
    const user = userService.getUserLogged();
    return true;
  } catch (e) {
    router.navigate(['/login']);
    return false;
  }

};
