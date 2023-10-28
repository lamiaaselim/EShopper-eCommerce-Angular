import { Component , OnInit} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  pagination: number = 1;
  products:any= [];
  allProducts:number =0;
  errMsg: any = '';

  constructor (private ProductService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.ProductService.fetchAllProduct(this.pagination).subscribe({
      next: data => this.products = data,
      error: err => this.errMsg = err
    })
  }

  goToProductDetails(id: any){
    // go to productDetails Page and pass the id
    this.router.navigate(['product', id])
  }

  renderPage(event: number) {
    this.pagination = event;
    window.scrollTo(0, 0);
  }

}
