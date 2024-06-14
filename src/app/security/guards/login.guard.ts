import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const cookieServices = inject(CookieService);

  if (cookieServices.check('Registro'))
    {
      return true
    }
  else
    {
      router.navigate(['login'])
      return false;
    }
};
