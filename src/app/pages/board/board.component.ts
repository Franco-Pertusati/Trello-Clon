import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDo, Column, Board } from '../../models/todo.model';
import { BoardService } from '../../services/boards.service';
import { ColumnComponent } from '../../components/column/column.component';
import { TodoComponent } from '../../components/todo/todo.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, TodoComponent, ColumnComponent, CdkDropListGroup],
  templateUrl: './board.component.html',
})
export class BoardComponent {
  selectedBoard: Board = { id: 0, title: 'Undefined', columns: [] };
  isCreatingColumn: boolean = false;

  constructor(private service: BoardService) {}

  ngOnInit() {
    this.selectedBoard = this.service.getSelectedBoard();
  }

  addColumn(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.value == '') {
      this.isCreatingColumn = false;
    } else {
      const newColumn: Column = {
        id: this.selectedBoard?.columns.length.toString(),
        title: input.value,
        todos: [],
      };
      this.selectedBoard?.columns.push(newColumn);
      input.value = '';
    }
  }
}
