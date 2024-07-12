import { Component, input, Input } from '@angular/core';
import { Board, Column, ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input() todo: ToDo = { id: 0, title: '' };
}
