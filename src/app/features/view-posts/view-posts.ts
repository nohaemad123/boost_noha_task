import { Component, Input } from '@angular/core';
import { PostModel } from '../../shared/models/post.model';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-view-posts',
  imports: [CommonModule, TableModule, SkeletonModule],
  templateUrl: './view-posts.html',
  styleUrl: './view-posts.css',
})
export class ViewPosts {
  @Input() posts: PostModel[] = [];
  skeletonArray = Array(5);
  @Input() loading: boolean = true
}
