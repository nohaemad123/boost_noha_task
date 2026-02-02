import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userModel } from '../../shared/models/user.model';
import { TableModule } from 'primeng/table';
import { RouterLink } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-view-users',
  imports: [CommonModule, TableModule, RouterLink, SkeletonModule],
  templateUrl: './view-users.html',
  styleUrl: './view-users.css',
})
export class ViewUsers {
  @Input() users: userModel[] = [];
  skeletonArray = Array(5);
  @Input() loading: boolean = true
}
