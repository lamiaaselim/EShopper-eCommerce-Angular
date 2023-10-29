export interface IShoppingCartItem {
  productId: number; // You can use the appropriate type for product IDs.
  product: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
}

export interface IShoppingCart {
  user: string;
  items: IShoppingCartItem[];
  total: number;
}
