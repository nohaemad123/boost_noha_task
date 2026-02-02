import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { RoleModel } from '../../shared/models/role.model';
import { ButtonModule } from 'primeng/button';
import { RoleService } from '../../core/services/role/role';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-select-role',
  imports: [SelectModule, FormsModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './select-role.html',
  styleUrl: './select-role.css',
})
export class SelectRole {
  selectedRole: RoleModel | null = null
  private roleServ = inject(RoleService);
  private router = inject(Router)


  roles = [
    { label: "admin", value: "admin" },
    { label: "instructor", value: "instructor" },
    { label: "user", value: "user" },
    { label: "manager", value: "manager" },
  ]


  onSubmit() {
    if (!this.selectedRole) return;
    this.roleServ.setRole(this.selectedRole)
    this.router.navigateByUrl("/data")
  }
}
