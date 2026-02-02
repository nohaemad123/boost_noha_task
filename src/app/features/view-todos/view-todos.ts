import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { todoModel } from '../../shared/models/todo.model';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-view-todos',
  imports: [CommonModule, TableModule, SkeletonModule],
  templateUrl: './view-todos.html',
  styleUrl: './view-todos.css',
})
export class ViewTodos {
  @Input() todos: todoModel[] = [];
  skeletonArray = Array(5);
  @Input() loading: boolean = true

}
