import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeaderComponent } from './header/header.component';
import { FeaturedComponent } from './featured/featured.component';
import { CategoriesComponent } from './categories/categories.component';
import { OfferComponent } from './offer/offer.component';
import { ProductsComponent } from './products/products.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { VendorComponent } from './vendor/vendor.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Sign-up
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
// Nice Scrolling


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderComponent,
    FeaturedComponent,
    CategoriesComponent,
    OfferComponent,
    ProductsComponent,
    SubscribeComponent,
    VendorComponent,
    FooterComponent,
    CarouselComponent,
    ShopComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    ContactUsComponent,
    SignUpComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,

  ],
  exports: [MatButtonModule, MatStepperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
