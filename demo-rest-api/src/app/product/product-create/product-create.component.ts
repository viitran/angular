import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { ProductService } from './../../services/product.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  Storage,
} from '@angular/fire/storage';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './product-create.component.htm',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  file!: File;
  previewUrl: string | ArrayBuffer | null = null;
  isUploading: boolean = false;
  isUploaded: boolean = false;
  category: any[] = [];
  productForm = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    quantity: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    category: new FormControl(''),
  });
  subscription: Subscription | undefined = undefined;

  storage: Storage = inject(Storage);

  constructor(
    private cateService: CategoryService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllCate();
  }

  getAllCate() {
    this.cateService.getAllCate().subscribe({
      next: (res) => (this.category = res),
      error: (err) => console.log(err),
    });
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
  uploadFile() {
    if (!this.file) return;

    this.isUploading = true;
    const storageRef = ref(this.storage, this.file.name);
    const uploadTask = uploadBytesResumable(storageRef, this.file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        alert(error);
        this.isUploading = false;
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          this.productForm.patchValue({ image: downloadURL });
          this.isUploading = false;
          this.isUploaded = true;
          
        });
      }
    );
  }

  cancelUpload() {
    this.file = null!;
    this.previewUrl = null;
    this.isUploading = false;
    this.isUploaded = false;
  }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }
    const temp = this.productForm.value;
    this.productService.save(temp).subscribe({
      next: (res) => {
        alert('Product added successfully');
        this.router.navigateByUrl('/');
      },
      error: (err) => console.error(err),
    });
  }
}
