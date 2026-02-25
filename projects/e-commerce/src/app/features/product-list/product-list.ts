import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { Product } from '../../core/models/product';
import { ProductService } from '../../core/services/product';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-list.html',
})
export class ProductListComponent {
  private categoryFilterSubject = new BehaviorSubject<string>('');
  private searchFilterSubject = new BehaviorSubject<string>('');
  private priceFilterSubject = new BehaviorSubject<number>(2000);

  categoryFilter$ = this.categoryFilterSubject.asObservable();
  searchFilter$ = this.searchFilterSubject.asObservable();
  priceFilter$ = this.priceFilterSubject.asObservable();

  filteredProducts$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.filteredProducts$ = combineLatest([
      this.productService.getProducts(),
      this.categoryFilter$,
      this.searchFilter$,
      this.priceFilter$,
    ]).pipe(
      map(([products, category, search, price]) => {
        return products.filter((p) => {
          const matchCategory = category ? p.category === category : true;
          const matchSearch = search ? p.name.toLowerCase().includes(search.toLowerCase()) : true;
          const matchPrice = p.price <= price;
          return matchCategory && matchSearch && matchPrice;
        });
      }),
    );
  }

  onSearchChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchFilterSubject.next(target.value);
  }

  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.categoryFilterSubject.next(target.value);
  }

  onPriceChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.priceFilterSubject.next(Number(target.value));
  }
}
