import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { BtnComponent } from '../../btn/btn.component';

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent {
  constructor(private dialogRef: DialogRef) {}

  close() {
    this.dialogRef.close();
  }
}
