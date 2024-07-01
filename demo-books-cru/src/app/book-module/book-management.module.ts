import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { FormGroup } from '@angular/forms';
import { BookUpdateComponent } from './book-update/book-update.component';
export const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: 'create',
    component: BookCreateComponent,
  },
  {
    path: 'edit/:id',
    component: BookUpdateComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})

export class BookManagementModule {}
