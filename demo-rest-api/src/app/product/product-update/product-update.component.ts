import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './product-update.component.htm',
  styleUrl: './product-update.component.css',
})
export class ProductUpdateComponent {
  file!: File;
  previewUrl: string | ArrayBuffer | null = null;
  isUploading: boolean = false;
  isUploaded: boolean = false;
  productId?: number;
  category: any[] = [];
  formEdit!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private storage: AngularFireStorage,
    private router: Router
  ) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.findById(this.productId).subscribe({
      next: (res) => {
        this.initEditForm(res);
      },
    });
    this.fetchDateCategory();
  }

  fetchDateCategory() {
    this.categoryService.getAllCate().subscribe({
      next: (res) => (this.category = res),
    });
  }

  cancelUpload() {
    this.file = null!;
    this.previewUrl = null;
    this.isUploading = false;
    this.isUploaded = false;
  }

  initEditForm(data: any) {
    console.log(data);
    this.formEdit = new FormGroup({
      id: new FormControl(data.id),
      name: new FormControl(data.name),
      author: new FormControl(data.author),
      quantity: new FormControl(data.quantity),
      description: new FormControl(data.description),
      category: new FormControl(data.category),
      image: new FormControl(data.image),
    });
  }

  onSubmit() {
    const formData = this.formEdit.value as any;
    this.productService.updateProduct(formData).subscribe({
      next: () => {
        console.log('Product updated successfully');
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        console.error('Error updating product:', err);
      },
    });
  }

  equal(c1: any, c2: any) {
    return c1.id === c2.id;
  }

  uploadFile() {
    if (!this.file) return;

    this.isUploading = true;
    const filePath = `upload/${this.file.name}`;
    const fileRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, this.file);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.formEdit.patchValue({ image: url });
            this.isUploading = false;
            this.isUploaded = true;
          });
        })
      )
      .subscribe();
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl = e.target?.result ?? null;
      };
      reader.readAsDataURL(this.file);
      this.isUploaded = false;
    }
  }
}
