import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],

  templateUrl: './product-list.component.htm',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe({
      next: (res) => (this.products = res),
    });
  }

  removeProduct(id: any) {
    this.productService.delete(id).subscribe({
      next: () => {
        this.products = this.products.filter((p) => p.id !== id);
      },
      complete: () => this.getAllProduct(),
    });
  }
}
