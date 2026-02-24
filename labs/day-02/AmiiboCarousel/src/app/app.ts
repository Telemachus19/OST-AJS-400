import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from './features/carousel/carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarouselComponent],
  template: `
    <main class="min-vh-100 bg-light py-5">
      <div class="container">
        <h1 class="text-center mb-4 text-dark fw-bold">R&M</h1>
        <app-carousel></app-carousel>
      </div>
    </main>
  `,
})
export class App {}
