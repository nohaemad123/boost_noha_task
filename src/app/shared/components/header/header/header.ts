import { Component, inject, OnInit } from '@angular/core';
import { RoleService } from '../../../../core/services/role/role';
import { Router } from '@angular/router';
import { RoleModel } from '../../../models/role.model';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [CommonModule, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  roleService = inject(RoleService);
  private router = inject(Router);

  ngOnInit(): void {
  }

  logout() {
    this.roleService.clearRole();
    this.router.navigateByUrl('/');
  }
}
