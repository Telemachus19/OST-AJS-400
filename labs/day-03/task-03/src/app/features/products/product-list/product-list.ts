import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, combineLatest, map, startWith } from 'rxjs';

import { Product } from '../../../core/models/product';
import { ProductService } from '../../../core/services/product';
import { TotalPriceComponent } from '../../../shared/components/total-price/total-price';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TotalPriceComponent, ProductCardComponent],
  templateUrl: './product-list.html',
})
export class ProductListComponent implements OnInit {
  categoryCtrl = new FormControl<string>('', { nonNullable: true });
  nameCtrl = new FormControl<string>('', { nonNullable: true });
  priceCtrl = new FormControl<number>(500, { nonNullable: true });

  // Data Streams
  products$!: Observable<Product[]>;
  filteredProducts$!: Observable<Product[]>;
  categories$!: Observable<string[]>;

  // Component State
  cartTotal: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();

    this.categories$ = this.products$.pipe(
      map((products) => [...new Set(products.map((p) => p.category))]),
    );

    // Reactive filtering stream
    this.filteredProducts$ = combineLatest([
      this.products$,
      this.categoryCtrl.valueChanges.pipe(startWith(this.categoryCtrl.value)),
      this.nameCtrl.valueChanges.pipe(startWith(this.nameCtrl.value)),
      this.priceCtrl.valueChanges.pipe(startWith(this.priceCtrl.value)),
    ]).pipe(
      map(([products, category, name, maxPrice]) => {
        return products.filter((product) => {
          const matchCategory = !category || product.category === category;
          const matchName = !name || product.name.toLowerCase().includes(name.toLowerCase());
          const matchPrice = product.price <= maxPrice;
          return matchCategory && matchName && matchPrice;
        });
      }),
    );
  }

  handleAddToCart(product: Product): void {
    this.cartTotal += product.price;
  }

  resetFilters(): void {
    this.categoryCtrl.setValue('');
    this.nameCtrl.setValue('');
    this.priceCtrl.setValue(500);
  }

  trackById(index: number, item: Product): number {
    return item.id;
  }
}
