import { Component, OnInit } from '@angular/core';
import { KidsDataService } from 'src/app/services/kids-data.service';
import { MenDataService } from 'src/app/services/men-data.service';
import { WomenDataService } from 'src/app/services/women-data.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-page-display',
  templateUrl: './home-page-display.component.html',
  styleUrls: ['./home-page-display.component.css'],
})
export class HomePageDisplayComponent implements OnInit {

  productList : any;
  womenDatas : any;
  menDatas : any;
  kidsDatas : any;

  constructor(
    private womenData: WomenDataService,
    private kidsData: KidsDataService,
    private menData: MenDataService,
    private api:ApiService
  ) {}



  ngOnInit(): void {
    this.womenDatas = this.womenData;
    this.menDatas = this.menData;
    this.kidsDatas = this.kidsData;
  }
}
