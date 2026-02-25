import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product';
import { ProductService } from '../../core/services/product';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-edit.html',
})
export class ProductEditComponent implements OnInit {
  products$!: Observable<Product[]>;
  isEditing = false;
  currentId: number | null = null;

  editForm = {
    name: '',
    description: '',
    price: 0,
    available: 0,
    category: '',
    imageUrlsStr: '',
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts();

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.isEditing = true;
        this.currentId = +id;
        this.loadProduct(this.currentId);
      } else {
        this.isEditing = false;
      }
    });
  }

  loadProduct(id: number) {
    this.productService.getProductById(id).subscribe((prod) => {
      if (prod) {
        this.editForm = {
          name: prod.name,
          description: prod.description,
          price: prod.price,
          available: prod.available,
          category: prod.category,
          imageUrlsStr: prod.imageUrls.join(', '),
        };
      } else {
        this.router.navigate(['/edit']);
      }
    });
  }

  onUpdate() {
    if (!this.currentId) return;

    const updatedData = {
      name: this.editForm.name,
      description: this.editForm.description,
      price: this.editForm.price,
      available: this.editForm.available,
      category: this.editForm.category,
      imageUrls: this.editForm.imageUrlsStr.split(',').map((url) => url.trim()),
    };

    this.productService.updateProduct(this.currentId, updatedData);
    this.router.navigate(['/products']);
  }
}
