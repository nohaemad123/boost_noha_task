import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RoleService } from '../services/role/role';
import { ToastrService } from 'ngx-toastr';

export const roleGuard: CanActivateFn = (route, state) => {
  const roleservice = inject(RoleService);
  const router = inject(Router);
  const role = roleservice.getRole();
  const toastr = inject(ToastrService)

  if (!role) {
    router.navigateByUrl("/")
    toastr.error("you must choose role first", 'Error', {
      timeOut: 4000,
      progressBar: true,
      closeButton: true,
    });
    return false
  }

  return true;
};
