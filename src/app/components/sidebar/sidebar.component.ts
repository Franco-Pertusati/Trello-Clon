import { Component } from '@angular/core';
import { SquareBtnComponent } from "../square-btn/square-btn.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SquareBtnComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  isExpanded = false;
}
