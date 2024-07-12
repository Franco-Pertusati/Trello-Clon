import { Component, input } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ToDo, Column, Board } from '../../models/todo.model';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TodoDialogComponent } from '../../components/dialogs/todo-dialog/todo-dialog.component';
import { BoardService } from '../../services/boards.service';

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
  selectedBoard?: Board;
  isCreatingColumn: boolean = false;

  constructor(private service: BoardService) {}

  ngOnInit() {
    this.selectedBoard = this.service.getSelectedBoard();
  }

  addColumn(event: Event) {
    const input = event.target as HTMLInputElement;

    const newColumn: Column = {
      title: input.value,
      todos: [],
    };
    input.value = '';
    this.selectedBoard?.columns.push(newColumn);
  }
}
