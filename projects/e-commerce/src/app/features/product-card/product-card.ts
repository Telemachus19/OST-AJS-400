import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../core/models/product';
import { CartService } from '../../core/services/cart';
import { ProductService } from '../../core/services/product';
import { BuyButtonComponent } from '../../shared/components/buy-button/buy-button';
import { TruncatePipe } from '../../shared/pipes/truncate-pipe';
import { HoverEffectDirective } from '../../shared/directives/hover-effect';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, BuyButtonComponent, TruncatePipe, HoverEffectDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-card.html',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  showFullDesc = false;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
  ) {}

  toggleDesc() {
    this.showFullDesc = !this.showFullDesc;
  }

  onBuy() {
    if (this.product.available > 0) {
      this.cartService.addToCart(this.product);
      this.productService.updateProduct(this.product.id, {
        available: this.product.available - 1,
      });
    }
  }
}
