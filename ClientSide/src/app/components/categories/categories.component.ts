import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  products: any = [];
  uniqueCategories: string[] = [];
  errMsg: any = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe({
      next: data => {
        this.products = data;
        this.uniqueCategories = this.getUniqueCategories(data);
      },
      error: err => this.errMsg = err
    });
  }

  getUniqueCategories(products: any[]): string[] {
    // Extract unique categories
    const categories = Array.from(new Set(products.map(product => product.category)));
    return categories;
  }
}
