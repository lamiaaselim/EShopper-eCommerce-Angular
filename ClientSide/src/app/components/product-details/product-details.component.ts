import { Component , OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ReviewService } from './../../services/review.service';
import { ShoppingCartService } from './../../services/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  counterQuantity: number = 1;
  isDisabled: boolean = false;
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
    private ShoppingCartService: ShoppingCartService,
              private activatedRoute: ActivatedRoute,
              private ReviewService: ReviewService,) {}

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.productID=this.activatedRoute.snapshot.paramMap.get("id");

    this.ProductService.getProductById(this.productID).subscribe({
      next: data => {
        this.productOfId = data;
        // Now that you have the product data, use its _id to fetch reviews
        this.ReviewService.reviewsForProduct(this.productOfId._id).subscribe({
          next: reviewData => this.reviewOfId = reviewData,
          error: err => this.errMsg = err
        });
      },
      error: err => this.errMsg = err
    });

    this.ReviewService.getAllReviews().subscribe({
      next: data => this.reviews = data,
      error: err => this.errMsg = err
    })

  }
  increaseQuantity(){
    this.counterQuantity++;
    this.isDisabled = false;
  }
  decreaseQuantity() {
    if (this.counterQuantity > 1) {
      this.counterQuantity--;
    } else {
      this.counterQuantity = 1;
      this.isDisabled = true;
    }
  }

}
