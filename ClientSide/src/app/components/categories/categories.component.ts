import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  products:any= [];
  uniqueCategories: string[] = [];
  errMsg: any = '';

  constructor(private ProductService: ProductService, private router: Router){}

  ngOnInit(): void {
    this.ProductService.getAllProduct().subscribe({
      next: data => {this.products = data
        this.uniqueCategories = this.getUniqueCategories(data);
      },
      error: err => this.errMsg = err
    })

  }

  goToProductDetails(id: any){
    // go to category Page and pass the category
    this.router.navigate(['product', id])
  }

  getUniqueCategories(products: any[]): string[] {
    return Array.from(new Set(products.map(product => product.category)));
  }

}
