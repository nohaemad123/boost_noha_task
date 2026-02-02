import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RoleService } from '../role/role';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DATA_CONFIG } from '../../../features/data.config';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);
  private roleService = inject(RoleService);
  private router = inject(Router);
  private toastr = inject(ToastrService)

  getData() {
    const role = this.roleService.getRole();
    if (!role) {
      this.router.navigateByUrl("/")
      this.toastr.error("you must choose role first", 'Error', {
        timeOut: 4000,
        progressBar: true,
        closeButton: true,
      });
      return
    }

    const apiUrl = DATA_CONFIG[role].api;
    return this.http.get<any[]>(apiUrl).pipe(
      catchError(err => {
        this.toastr.error('Failed to load data', 'Error');
        console.error(err);
        return of([]);
      }))
  }

  getDetailsById(id: string) {
    const role = this.roleService.getRole();
    if (!role) throw new Error("Role not found");

    const apiUrl = `${DATA_CONFIG[role].api}/${id}`;
    return this.http.get<any>(apiUrl);
  }
}
