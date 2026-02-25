import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product';
import { ProductService } from '../../core/services/product';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-delete.html',
})
export class ProductDeleteComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  onDelete(id: number, name: string) {
    if (confirm(`Are you absolutely sure you want to delete ${name}? This cannot be undone.`)) {
      this.productService.deleteProduct(id);
    }
  }
}
