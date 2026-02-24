// features/carousel/carousel.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmiiboService } from '../../core/services/amiibo';
import { Character } from '../../core/models/carousel.model';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css'],
})
export class CarouselComponent implements OnInit {
  private dataService = inject(AmiiboService);

  items: Character[] = [];
  isLoading: boolean = true;
  errorMessage: string | null = null;
  currentIndex: number = 0;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.dataService.getCarouselData().subscribe({
      next: (data) => {
        this.items = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.errorMessage = 'Failed to load character data. Please try again later.';
        this.isLoading = false;
      },
    });
  }

  nextSlide(): void {
    this.currentIndex = this.currentIndex === this.items.length - 1 ? 0 : this.currentIndex + 1;
  }

  prevSlide(): void {
    this.currentIndex = this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
