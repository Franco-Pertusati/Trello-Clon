import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CdkAccordionModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  
}
