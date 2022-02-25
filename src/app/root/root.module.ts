import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenSectionComponent } from './men-section/men-section.component';
import { WomenSectionComponent } from './women-section/women-section.component';
import { KidsSectionComponent } from './kids-section/kids-section.component';
import { HomePageDisplayComponent } from './home-page-display/home-page-display.component';
import { CartSectionComponent } from './cart-section/cart-section.component';
import { WishListSectionComponent } from './wish-list-section/wish-list-section.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ApiService } from '../services/api.service';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageDisplayComponent,
    MenSectionComponent,
    WomenSectionComponent,
    KidsSectionComponent,
    CartSectionComponent,
    WishListSectionComponent,
    ProductDisplayComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenSectionComponent,
    WomenSectionComponent,
    HomePageDisplayComponent
  ],
  providers:[
    ApiService
  ]
})
export class RootModule { }
