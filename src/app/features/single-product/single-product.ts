import { Component, inject, signal } from '@angular/core';
import { Header } from '../../shared/components/header/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data/data';
import { productModel } from '../../shared/models/product.model';
import { SingleProductSkeleton } from '../../shared/components/single-product-skeleton/single-product-skeleton';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-product',
  imports: [Header, Footer, SingleProductSkeleton, CommonModule],
  templateUrl: './single-product.html',
  styleUrl: './single-product.css',
})
export class SingleProduct {

  private route = inject(ActivatedRoute);
  private dataServ = inject(DataService);

  product = signal<productModel | null>(null);
  loading = signal(true);
  stars = [1, 2, 3, 4, 5];


  floorRate(rate: number | undefined) {
    return rate ? Math.floor(rate) : 0;
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.dataServ.getDetailsById(id)?.subscribe({
      next: (res) => {
        this.product.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
}
