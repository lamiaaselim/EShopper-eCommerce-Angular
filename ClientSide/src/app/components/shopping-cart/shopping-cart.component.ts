import { Component , OnInit} from '@angular/core';
import { ShoppingCartService } from './../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {

  counterQuantity: number = 1;
  isDisabled: boolean = false;
  cartItems: any = [];
  errMsg: any = '';
  constructor (private ShoppingCartService: ShoppingCartService, ) {}

  ngOnInit() : void{
    this.ShoppingCartService.getAllCartItems().subscribe({
      next: data => this.cartItems = data,
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
