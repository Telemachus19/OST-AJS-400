import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TotalPriceComponent } from './shared/components/total-price/total-price';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, TotalPriceComponent],
  templateUrl: './app.html',
})
export class App implements OnInit {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
    this.renderer.appendChild(this.document.body, script);
  }
}
