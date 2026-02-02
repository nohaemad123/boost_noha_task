import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data/data';
import { userModel } from '../../shared/models/user.model';
import { Header } from '../../shared/components/header/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { CommonModule } from '@angular/common';
import { SingleUserSkeleton } from '../../shared/components/single-user-skeleton/single-user-skeleton';

@Component({
  selector: 'app-single-user',
  imports: [Header, Footer, CommonModule, SingleUserSkeleton],
  templateUrl: './single-user.html',
  styleUrl: './single-user.css',
})
export class SingleUser implements OnInit {

  private route = inject(ActivatedRoute);
  private dataServ = inject(DataService);
  user = signal<userModel | null>(null);
  loading = signal(true);


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.dataServ.getDetailsById(id)?.subscribe({
      next: (res) => {
        this.user.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }


}
