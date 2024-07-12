import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BoardService } from '../../services/boards.service';
import { Board } from '../../models/todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  boards: Board[] = [];
  isBoardBeingCreate: boolean = false;

  constructor(private boardService: BoardService, private router: Router) {}

  ngOnInit() {
    this.boards = this.boardService.getBoards();
  }

  navigateToBoard(id: number): void {
    this.router.navigate(['/boards', id]);
  }

  setSelectedBoard(id: number) {
    this.boardService.setSelectedBoard(id);
  }

  createBorad(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.value != '') {
      const board: Board = {
        id: this.boards.length + 1,
        name: input.value,
        columns: [],
      };
      this.boardService.addBoard(board);
      input.value = '';
    } else {
      this.isBoardBeingCreate = false;
    }
  }
}
