import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookServicesService } from './../../book-services.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Book } from './../../model/book';
import { Category } from '../../model/category';
import { CategoryServicesService } from '../../category-services.service';

@Component({
  selector: 'app-book-update',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './book-update.component.htm',
  styleUrl: './book-update.component.css',
})
export class BookUpdateComponent {
  productId?: number;
  category: Category[] = [];
  formEdit!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    // activatedRoute lấy dc tham số trên URL, lấy theo đg dẫn tĩnh tham số tĩnh (snapshot)
    private service: BookServicesService,
    private cateService: CategoryServicesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchDataCate();
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    // sử dụng snapshot.paramMap để lấy id ra tại thời điểm khi click vào
    // giá trị của paramMap chỉ áp dụng cho route hiện tại đang đc gọi đến
    console.log(this.productId);
    this.service.getBookById(this.productId).subscribe({
      next: (res) => {
        this.initEditForm(res);
      },
    });
  }

  fetchDataCate() {
    this.cateService.getAllCate().subscribe({
      next: (res) => (this.category = res),
    });
  }

  initEditForm(data: Book) {
    this.formEdit = new FormGroup({
      id: new FormControl(data.id),
      name: new FormControl(data.name, Validators.required),
      author: new FormControl(data.author, Validators.required),
      quantity: new FormControl(data.quantity, Validators.required),
      description: new FormControl(data.description, Validators.required),
      category: new FormControl(data.category),
    });
  }

  get validControl() {
    return this.formEdit.controls;
  }

  onSubmit() {
     console.log(
      this.formEdit.value as Book
      );
      const b = this.formEdit.value as Book;
      this.service.update(b).subscribe({next: ()=>{
        this.router.navigateByUrl("/");
      }});
  }

  //func so sanh mapping the loai
  equal(c1: Category, c2: Category) {
    return c1.id === c2.id;
  }
}
