import { Component } from '@angular/core';
import { AnchorComponent } from '../../components/anchor/anchor.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [AnchorComponent],
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {}
