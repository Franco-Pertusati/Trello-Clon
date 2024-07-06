import { Component } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ToDo } from '../../models/todo.model';
import { NavbarComponent } from '../../components/navbar/navbar.component';

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
  todos: ToDo[] = [
    {
      id: '1',
      title: 'Task 1',
    },
    {
      id: '3',
      title: 'Task 3',
    },
    {
      id: '4',
      title: 'Task 4',
    },
  ];

  // doing: ToDO[] = [
  //   {
  //     id: '2',
  //     title: 'Task 2',
  //   },
  // ];

  // done: ToDO[] = [];


  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
