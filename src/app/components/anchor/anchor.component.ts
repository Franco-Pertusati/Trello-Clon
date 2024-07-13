import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anchor',
  standalone: true,
  imports: [],
  templateUrl: './anchor.component.html',
})
export class AnchorComponent {
  @Input() destiny = '';
}
