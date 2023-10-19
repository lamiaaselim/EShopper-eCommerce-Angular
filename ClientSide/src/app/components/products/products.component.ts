import { Component , OnInit} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  implements OnInit {

  products:any= [];
  errMsg: any = '';

  constructor (private ProductService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.ProductService.getAllProduct().subscribe({
      next: data => this.products = data,
      error: err => this.errMsg = err
    })
  }

  goToProductDetails(id: any){
    // go to productDetails Page and pass the id
    this.router.navigate(['product', id])
  }

}
