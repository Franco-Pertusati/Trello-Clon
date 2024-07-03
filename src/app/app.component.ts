import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// const wasd = require ("../assets/wasd.jpg")

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'trello-clone';
}
