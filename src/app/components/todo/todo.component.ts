import { Component, Input, Inject } from '@angular/core';
import { ToDo } from '../../models/todo.model';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { TodoDialogComponent } from '../dialogs/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input() todo: ToDo = { id: 0, title: '', description: '', comments: [] };
  @Input() todoFather: string = '';

  constructor(public dialog: Dialog) {}

  openDialog() {
    this.dialog.open(TodoDialogComponent, {
      width: '768px',
      maxHeight:'825px',
      data: {
        todo: this.todo,
        todoFather: this.todoFather
      },
    });
  }
}
