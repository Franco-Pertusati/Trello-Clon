import { Injectable } from '@angular/core';
import { Board } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private boards: Board[] = [];

  private selectedBoard: undefined | Board = undefined;

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
    this.selectedBoard = this.boards.find((board) => board.id === id);
  }

  getSelectedBoard() {
    return this.selectedBoard;
  }
}
