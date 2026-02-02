import { Directive, Input, TemplateRef, ViewContainerRef, inject, OnInit } from '@angular/core';
import { RoleService } from '../../core/services/role/role';

@Directive({
  selector: '[appRoleDirective]',
  standalone: true,
})
export class RoleDirective implements OnInit {
  @Input() appRoleDirective!: string;
  private roleService = inject(RoleService);

  constructor(private tpl: TemplateRef<any>, private vcr: ViewContainerRef) { }

  ngOnInit() {
    if (this.roleService.getRole() === this.appRoleDirective) {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }
}
