import { Component , OnInit} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  selectedValue: any ;
  products:any= [];
  errMsg: any = '';

  constructor (private ProductService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.selectedValue=this.activatedRoute.snapshot.paramMap.get("name");
    this.ProductService.getAllProduct().subscribe({
      next: data => {this.products = data.filter(product => product.categoryName === this.selectedValue)},
      error: err => this.errMsg = err
    })

  }

  goToProductDetails(id: any){
    // go to productDetails Page and pass the id
    this.router.navigate(['product', id])
  }

}
