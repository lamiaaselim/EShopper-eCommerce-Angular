import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ReviewService } from './../../services/review.service';
import { ColorService } from './../../services/color.service';
import { SizeService } from './../../services/size.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products:any= [];
  productOfId: any;
  colorOfId: any;
  reviewsOfProduct : any;
  reviews: any = [];
  counter: number = 0;
  reviewOfId: any;
  sizeOfId: any;
  errMsg: any = '';
  productID: any ;
  constructor(private ProductService: ProductService,
              private activatedRoute: ActivatedRoute,
              private ReviewService: ReviewService,
              private ColorService: ColorService,
              private SizeService: SizeService)
  {

  }

  ngOnInit(): void {
    this.productID=this.activatedRoute.snapshot.paramMap.get("id");


    this.ProductService.getProductById(this.productID).subscribe({
      next: data => this.productOfId = data,
      error: err => this.errMsg = err
    })

    this.ReviewService.getAllReviews().subscribe({
      next: data => this.reviews = data,
      error: err => this.errMsg = err
    })


    this.ReviewService.getReviewById(this.productOfId._id).subscribe({
      next: data => this.reviewOfId = data,
      error: err => this.errMsg = err
    })

    this.ColorService.getColorById(this.productOfId.colors).subscribe({
      next: data => this.colorOfId = data,
      error: err => this.errMsg = err
    })

    this.SizeService.getSizeById(this.productID).subscribe({
      next: data => this.sizeOfId = data,
      error: err => this.errMsg = err
    })

  }
}
