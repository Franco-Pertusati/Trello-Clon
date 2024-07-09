import { Component } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ToDo, Column } from '../../models/todo.model';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DragDropModule, CommonModule, NavbarComponent],
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  constructor (
    private dialog: Dialog
  ) {}

  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Task 1',
        },
        {
          id: '2',
          title: 'Task 2',
        },
        {
          id: '3',
          title: 'Task 3',
        },
      ],
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '4',
          title: 'Task 4',
        },
      ],
    },
    {
      title: 'Done',
      todos: [
        {
          id: '7',
          title: 'Task 7',
        },
      ],
    },
  ];

  todos: ToDo[] = [];

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn() {
    this.columns.push({
      title: '',
      todos: [],
      namingColumnMode: true,
    });
  }

  applyColumnName(i: number, event: Event) {
    const input = event.target as HTMLInputElement;
    this.columns[i].title = input.value;
    this.columns[i].namingColumnMode = false;
    this.addColumn();
  }

  addTodo() {
    this.todos.push({
      title: '',
      id: 'x',
      namingTodoMode: true,
    });
  }

  applyTodoName(i: number, event: Event) {
    const input = event.target as HTMLInputElement;
    this.todos[i].title = input.value;
    this.todos[i].namingTodoMode = false;
    this.addTodo();
  }

  openDialog() {
    this.dialog.open(TodoDialogComponent, {
      width: '768px'
    })

  }
}
