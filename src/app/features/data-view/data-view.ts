import { Component, inject, OnInit, signal } from '@angular/core';
import { RoleDirective } from '../../shared/directives/role-directive';
import { CommonModule } from '@angular/common';
import { RoleService } from '../../core/services/role/role';
import { DataService } from '../../core/services/data/data';
import { DATA_CONFIG } from '../data.config';
import { ViewUsers } from '../view-users/view-users';
import { Header } from '../../shared/components/header/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { ViewPosts } from '../view-posts/view-posts';
import { ViewProducts } from '../view-products/view-products';
import { ViewTodos } from '../view-todos/view-todos';

@Component({
  selector: 'app-data-view',
  standalone: true,
  imports: [CommonModule, RoleDirective, ViewUsers, Header, Footer, ViewPosts, ViewProducts, ViewTodos],
  templateUrl: './data-view.html',
  styleUrls: ['./data-view.css'],
})
export class DataView implements OnInit {
  data = signal([]);
  loading = signal(true);
  error = signal('');
  title = '';

  private roleServ = inject(RoleService);
  private dataServ = inject(DataService);

  ngOnInit(): void {
    const role = this.roleServ.getRole();
    this.title = DATA_CONFIG[role!].title;

    this.dataServ.getData()?.subscribe({
      next: (res: any) => {
        this.data.set(res);
        this.loading.set(false);
        console.log(this.data());
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }
}
