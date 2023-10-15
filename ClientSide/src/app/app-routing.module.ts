import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "home", component: HomeComponent },
  {path: "categories", component: CategoriesComponent },
  { path: "login", component: LogInComponent },
  { path: "signup", component: SignUpComponent },
  { path: "shop", component: ShopComponent },
  { path: "product", component: ProductDetailsComponent },
  { path: "cart", component: ShoppingCartComponent },
  { path: "contact", component: ContactUsComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
