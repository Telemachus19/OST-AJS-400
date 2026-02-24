import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product';
import { BuyButtonComponent } from '../../../shared/components/buy-button/buy-button';
import { HoverEffectDirective } from '../../../shared/directives/hover-effect';
import { TruncateWordsPipe } from '../../../shared/pipes/truncate-words-pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, BuyButtonComponent, HoverEffectDirective, TruncateWordsPipe],
  templateUrl: './product-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Output() addToCart = new EventEmitter<Product>();

  isExpanded: boolean = false;

  toggleDescription(): void {
    this.isExpanded = !this.isExpanded;
  }

  onBuy(): void {
    this.addToCart.emit(this.product);
  }
}
