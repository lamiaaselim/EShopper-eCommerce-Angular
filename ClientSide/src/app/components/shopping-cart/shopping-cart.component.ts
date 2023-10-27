import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {

  counterQuantity: number = 1;
  isDisabled: boolean = false;

  constructor ( ) {}

  ngOnInit() : void{}

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
