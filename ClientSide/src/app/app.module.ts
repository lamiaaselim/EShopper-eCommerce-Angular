import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// Component
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OfferComponent } from './components/offer/offer.component';
import { ProductsComponent } from './components/products/products.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { HomeComponent } from './components/home/home.component'
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { EditComponent } from './components/dashboard/edit/edit.component';
import { AddComponent } from './components/dashboard/add/add.component';
import { VeiwComponent } from './components/dashboard/veiw/veiw.component';
//Sign-up
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
// HTTP Obsrvsable
import { HttpClientModule } from '@angular/common/http';
// Reactive forms
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// NgxPaginationModule
import { NgxPaginationModule } from 'ngx-pagination';


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
    LogInComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NavComponent,
    CheckOutComponent,
    EditComponent,
    AddComponent,
    VeiwComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    // Ng2SearchPipeModule,
  ],
  exports: [MatButtonModule, MatStepperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
