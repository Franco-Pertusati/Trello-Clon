import { Component } from '@angular/core';
import { BtnComponent } from '../../components/btn/btn.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule, CommonModule ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isOpen = false;
}
