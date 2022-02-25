import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { KidsDataService } from 'src/app/services/kids-data.service';
import { MenDataService } from 'src/app/services/men-data.service';
import { WomenDataService } from 'src/app/services/women-data.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css'],
})
export class ProductDisplayComponent implements OnInit {
  productDetails: any;
  productId:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private womenData: WomenDataService,
    private kidsData: KidsDataService,
    private menData: MenDataService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const productCategoryFromRoute = routeParams.get('category');
    this.productId = routeParams.get('id');

    if(productCategoryFromRoute === 'Women'){
      this.productDetails = this.womenData;
    }
    else if(productCategoryFromRoute === 'Men'){
      this.productDetails = this.menData;
    }
    else if(productCategoryFromRoute === 'Kids'){
      this.productDetails = this.kidsData;
    }


    console.log(this.productDetails);
  }
}
