import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private initialProducts: Product[] = [
    {
      id: 1,
      name: 'Quantum Laptop Pro',
      description: 'High performance laptop for demanding enterprise workloads.',
      price: 1299,
      category: 'Electronics',
      imageUrls: [
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80',
        'https://images.unsplash.com/photo-1531297172864-45d2432a7620?w=500&q=80',
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80',
      ],
      available: 5,
    },
    {
      id: 2,
      name: 'ErgoChair Executive',
      description: 'Ergonomic office chair with lumbar support and mesh back.',
      price: 350,
      category: 'Furniture',
      imageUrls: [
        'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80',
        'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80',
        'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=500&q=80',
      ],
      available: 2,
    },
  ];

  // Subject acts as our in-memory enterprise database
  private productsSubject = new BehaviorSubject<Product[]>(this.initialProducts);

  // READ (All)
  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  // READ (One)
  getProductById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(map((products) => products.find((p) => p.id === id)));
  }

  // CREATE
  addProduct(product: Omit<Product, 'id'>) {
    const currentProducts = this.productsSubject.value;
    const nextId =
      currentProducts.length > 0 ? Math.max(...currentProducts.map((p) => p.id)) + 1 : 1;
    this.productsSubject.next([...currentProducts, { ...product, id: nextId }]);
  }

  // UPDATE
  updateProduct(id: number, updatedProduct: Partial<Product>) {
    const currentProducts = this.productsSubject.value;
    this.productsSubject.next(
      currentProducts.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p)),
    );
  }

  // DELETE
  deleteProduct(id: number) {
    const currentProducts = this.productsSubject.value;
    this.productsSubject.next(currentProducts.filter((p) => p.id !== id));
  }
}
