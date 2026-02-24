import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: 150,
      description: 'High-quality noise-canceling wireless over-ear headphones.',
      imageUrl: 'https://placehold.co/400x300?text=Headphones',
    },
    {
      id: 2,
      name: 'Mechanical Keyboard',
      category: 'Electronics',
      price: 99,
      description: 'RGB mechanical keyboard with tactile blue switches.',
      imageUrl: 'https://placehold.co/400x300?text=Keyboard',
    },
    {
      id: 3,
      name: 'Running Shoes',
      category: 'Fitness',
      price: 120,
      description: 'Lightweight and durable running shoes for all terrains.',
      imageUrl: 'https://placehold.co/400x300?text=Shoes',
    },
    {
      id: 4,
      name: 'Yoga Mat',
      category: 'Fitness',
      price: 25,
      description: 'Eco-friendly non-slip yoga mat with carrying strap.',
      imageUrl: 'https://placehold.co/400x300?text=Yoga+Mat',
    },
    {
      id: 5,
      name: 'Coffee Maker',
      category: 'Home Appliances',
      price: 85,
      description: 'Programmable coffee maker with a built-in grinder.',
      imageUrl: 'https://placehold.co/400x300?text=Coffee+Maker',
    },
    {
      id: 6,
      name: 'Desk Lamp',
      category: 'Home Appliances',
      price: 30,
      description: 'Adjustable LED desk lamp with multiple brightness settings.',
      imageUrl: 'https://placehold.co/400x300?text=Desk+Lamp',
    },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products).pipe(delay(300));
  }
}
