import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products:any= [];
  productOfId: any;
  errMsg: any = '';
  productID: any ;
  constructor(private ProductService: ProductService, private activatedRoute: ActivatedRoute)
  {

  }

  ngOnInit(): void {
    this.productID=this.activatedRoute.snapshot.paramMap.get("id");


    this.ProductService.getProductById(this.productID).subscribe({
      next: data => this.productOfId = data,
      error: err => this.errMsg = err
    })

  }
}
