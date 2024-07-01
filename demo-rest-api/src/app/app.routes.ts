import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'product',
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
];
