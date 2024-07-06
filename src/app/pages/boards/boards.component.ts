import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, CdkAccordionModule],
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub Item 1.1',
        },
        {
          label: 'Sub Item 1.2',
        },
      ],
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub Item 2.1',
        },
      ],
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Sub Item 3.1',
        },
        {
          label: 'Sub Item 3.2',
        },
        {
          label: 'Sub Item 4.2',
        },
      ],
    },
  ];
}
