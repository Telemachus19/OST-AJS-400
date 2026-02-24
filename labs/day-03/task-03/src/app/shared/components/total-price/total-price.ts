import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total-price',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total-price.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalPriceComponent {
  @Input() total: number = 0;
}
