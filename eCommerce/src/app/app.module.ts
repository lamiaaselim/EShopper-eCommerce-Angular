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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
