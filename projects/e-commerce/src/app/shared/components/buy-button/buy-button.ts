import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buy-button',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './buy-button.html',
})
export class BuyButtonComponent {
  @Input() color: 'primary' | 'success' | 'warning' | 'danger' | 'dark' = 'primary';
  @Input() text: string = 'Add to Cart';
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
