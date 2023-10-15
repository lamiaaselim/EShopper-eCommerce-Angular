import { Component , OnInit} from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  implements OnInit {

  products:any= [];
  errMsg: any = '';

  constructor (private ProductService: ProductService) {}

  ngOnInit(): void {

    this.ProductService.getAllProduct().subscribe({
      next: data => this.products = data,
      error: err => this.errMsg = err
    })

  }

}
