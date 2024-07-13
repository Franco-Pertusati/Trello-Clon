import { Routes } from '@angular/router';
import { BoardsComponent } from './pages/boards/boards.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { BoardComponent } from './pages/board/board.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'boards', component: BoardsComponent },
      { path: 'boards/:id', component: BoardComponent },
    ],
  },
];
