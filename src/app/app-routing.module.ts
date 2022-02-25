import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartSectionComponent } from './root/cart-section/cart-section.component';
import { HomePageDisplayComponent } from './root/home-page-display/home-page-display.component';
import { KidsSectionComponent } from './root/kids-section/kids-section.component';
import { MenSectionComponent } from './root/men-section/men-section.component';
import { ProductDisplayComponent } from './root/product-display/product-display.component';
import { WishListSectionComponent } from './root/wish-list-section/wish-list-section.component';
import { WomenSectionComponent } from './root/women-section/women-section.component';

const routes: Routes = [
  {
    path:"home", component:HomePageDisplayComponent
  },
  {
    path:'men', component:MenSectionComponent
  },
  {
    path:'women', component:WomenSectionComponent
  },
  {
    path:'kids', component:KidsSectionComponent
  },
  {
    path:'cart', component:CartSectionComponent
  },
  {
    path:'wishlist', component:WishListSectionComponent
  },
  {
    path:'product/:category/:id', component:ProductDisplayComponent
  },
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  },
  {
    path:'**', redirectTo:'/home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
