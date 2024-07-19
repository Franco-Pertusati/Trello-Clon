import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { MapsComponent } from './pages/maps/maps.component';
import { SalesComponent } from './pages/sales/sales.component';
import { AtmComponent } from './pages/atm/atm.component';
import { StockComponent } from './pages/stock/stock.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShiftsComponent } from './pages/shifts/shifts.component';
import { StatsComponent } from './pages/stats/stats.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MapsComponent,
      },
      {
        path: 'sales',
        component: SalesComponent,
      },
      {
        path: 'atm',
        component: AtmComponent,
      },
      {
        path: 'stock',
        component: StockComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'shitfs',
        component: ShiftsComponent,
      },
      {
        path: 'stats',
        component: StatsComponent,
      },
    ],
  },
];
