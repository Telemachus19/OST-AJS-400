import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { CartService } from '../../../core/services/cart';

@Component({
  selector: 'app-total-price',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './total-price.html',
})
export class TotalPriceComponent {
  total$: Observable<number>;
  itemCount$: Observable<number>;

  constructor(private cartService: CartService) {
    this.total$ = this.cartService.cart$.pipe(
      map((items) => items.reduce((acc, item) => acc + item.price, 0)),
    );
    this.itemCount$ = this.cartService.cart$.pipe(map((items) => items.length));
  }
}
