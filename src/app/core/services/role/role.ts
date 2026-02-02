import { Injectable, signal } from '@angular/core';
import { RoleModel } from '../../../shared/models/role.model';

@Injectable({
  providedIn: 'root',
})

export class RoleService {
  private readonly role = signal<RoleModel | null>(null)

  getRole() {
    return this.role()
  }

  setRole(role: RoleModel) {
    this.role.set(role)
  }

  clearRole() {
    this.role.set(null)
  }
}
