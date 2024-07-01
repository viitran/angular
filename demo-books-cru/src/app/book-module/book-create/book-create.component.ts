import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { Category } from '../../model/category';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CategoryServicesService } from '../../category-services.service';
import { NgFor, NgIf } from '@angular/common';
import { BookServicesService } from './../../book-services.service';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './book-create.component.htm',
  styleUrl: './book-create.component.css',
})

export class BookCreateComponent {
  category: Category[] = [];
  formCreate = new FormGroup({
    name: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl(),
    category: new FormControl(''),
  });

  constructor(
    private cateService: CategoryServicesService,
    private bookService: BookServicesService,
    private router: Router
  ) {}

  onSubmit() {
    const b = this.formCreate.value as Book;
    console.log(this.formCreate.value);
    this.bookService.save(b).subscribe({
      next: (res) => this.router.navigateByUrl('/'),
    });
  }

  ngOnInit() {
    this.fetchDataCate();
  }

  get validControl() {
    return this.formCreate.controls;
  }

  fetchDataCate() {
    this.cateService.getAllCate().subscribe({
      next: (res) => (this.category = res),
    });
  }
}
