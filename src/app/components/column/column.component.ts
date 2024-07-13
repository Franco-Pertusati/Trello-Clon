import { Component, Input } from '@angular/core';
import { Board, Column, ToDo } from '../../models/todo.model';
import { TodoComponent } from '../todo/todo.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [TodoComponent, CdkDropList, CdkDrag],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss'
})
export class ColumnComponent {
  @Input() column: Column = { title: 'Undefined', todos: [], id: '' };

  isCreatingCard: boolean = false;

  addTodo(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.value == '') {
      this.isCreatingCard = false;
    } else {
      const newTodo: ToDo = {
        id: this.column.todos.length,
        title: input.value,
        description: '',
        comments: [],
      };
      this.column.todos.push(newTodo);
      input.value = '';
    }
  }

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
}
