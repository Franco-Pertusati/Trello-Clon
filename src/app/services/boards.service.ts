import { Injectable } from '@angular/core';
import { Board } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private boards: Board[] = [
    {
      id: 1,
      name: 'Board 1',
      columns: [
        {
          title: 'ToDo',
          todos: [
            { id: 24, title: 'Cortar cebolla' },
            { id: 24, title: 'Comitear cambios' },
            { id: 24, title: 'Regar las plantas' },
          ],
        },
      ],
    },
  ];

  private selectedBoard: Board = { name: '', id: 0, columns: [] };

  getBoards(): Board[] {
    return this.boards;
  }

  getBoardById(id: number): Board | undefined {
    return this.boards.find((board) => board.id === id);
  }

  addBoard(board: Board): void {
    this.boards.push(board);
  }

  setSelectedBoard(id: number) {
    const result = this.boards.find((board) => board.id === id);
    if (result != undefined) {
      this.selectedBoard = result;
    } else {
      this.selectedBoard = { name: '', id: 0, columns: [] };
    }
  }

  getSelectedBoard() {
    return this.selectedBoard;
  }
}
