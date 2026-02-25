import { Routes } from '@angular/router';
import { ProductListComponent } from './features/product-list/product-list';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  {
    path: 'add',
    loadComponent: () =>
      import('./features/product-add/product-add').then((m) => m.ProductAddComponent),
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./features/product-edit/product-edit').then((m) => m.ProductEditComponent),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./features/product-edit/product-edit').then((m) => m.ProductEditComponent),
  },
  {
    path: 'delete',
    loadComponent: () =>
      import('./features/product-delete/product-delete').then((m) => m.ProductDeleteComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFoundComponent),
  },
];
