import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buy-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buy-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuyButtonComponent {
  @Input() title: string = 'Buy Now';
  @Input() color: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' = 'primary';

  @Output() action = new EventEmitter<void>();

  onClick(event: Event): void {
    // Prevent event bubbling if this button is nested inside other clickable elements
    event.stopPropagation();
    this.action.emit();
  }
}
