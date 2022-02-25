import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KidsDataService {

  constructor() { }
  category_name = 'Kids';

  products = [
    {
      id: '1',
      sale_badge: true,
      img_src: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product_name: 'Special Item',
      rating_points: '1',
      price_range: false,
      original_price: '$20.00',
      offer_price: '$18.00'
    },
    {
      id: '2',
      sale_badge: false,
      img_src: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product_name: 'Special Item',
      rating_points: '2',
      price_range: true,
      original_price: '$20.00',
      offer_price: '$18.00'
    },
    {
      id: '3',
      sale_badge: true,
      img_src: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product_name: 'Special Item',
      rating_points: '4',
      price_range: false,
      original_price: '$20.00',
      offer_price: '$18.00'
    },
    {
      id: '4',
      sale_badge: false,
      img_src: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product_name: 'Special Item',
      rating_points: '5',
      price_range: true,
      original_price: '$20.00',
      offer_price: '$18.00'
    },
  ];
}
