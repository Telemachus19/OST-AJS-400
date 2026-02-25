import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../core/services/product';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-add.html',
})
export class ProductAddComponent {
  product = {
    name: '',
    description: '',
    price: 0,
    available: 1,
    category: 'Electronics',
    imageUrlsStr: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
  };

  constructor(
    private productService: ProductService,
    private router: Router,
  ) {}

  onSubmit() {
    const newProduct = {
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      available: this.product.available,
      category: this.product.category,
      imageUrls: this.product.imageUrlsStr.split(',').map((url) => url.trim()),
    };

    this.productService.addProduct(newProduct);
    this.router.navigate(['/products']);
  }
}
