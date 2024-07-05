import { Component } from '@angular/core';
import { ListBtnComponent } from '../list-btn/list-btn.component';
import { SquareBtnComponent } from '../square-btn/square-btn.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ListBtnComponent, SquareBtnComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
