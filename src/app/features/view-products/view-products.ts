import { Component, Input } from '@angular/core';
import { productModel } from '../../shared/models/product.model';
import { CardModule } from 'primeng/card';
import { RouterLink } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-products',
  imports: [CardModule, RouterLink, SkeletonModule, CommonModule],
  templateUrl: './view-products.html',
  styleUrl: './view-products.css',
})
export class ViewProducts {
  @Input() products: productModel[] = [];
  skeletonArray = Array(5);
  @Input() loading: boolean = false
}
