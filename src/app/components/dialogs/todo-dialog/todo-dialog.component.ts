import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { BtnComponent } from '../../btn/btn.component';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent {
  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any
  ) {
    this.data = data;
  }

  isCreatingNewDescription: boolean = false;

  createComent(event: Event) {
    const input = event.target as HTMLInputElement;
    const newComment = input.value;
    this.data.todo.comments.push(newComment);
    input.value = '';
  }

  createDescription(event: Event) {
    const input = event.target as HTMLInputElement;
    const newDescription = input.value;
    this.data.todo.description = newDescription;
  }

  editDescription() {
    
  }

  close() {
    this.dialogRef.close();
  }
}
