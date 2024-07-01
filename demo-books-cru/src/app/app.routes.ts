import { Routes } from '@angular/router';
import { BookManagementModule } from './book-module/book-management.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books',
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./book-module/book-management.module').then(
        (m) => m.BookManagementModule
      ),
    // loadChildren - kiểu để xử lý các router lồng nhau lazy load
  },
  {
    path: 'cate',
    loadChildren: () =>
      import('./cate-management/cate-management.module').then(
  (m) => m.CateManagementModule
      ),
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
