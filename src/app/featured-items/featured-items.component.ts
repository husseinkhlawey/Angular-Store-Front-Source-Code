import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import {Product} from '../models/product.model';
import {ProductsService} from '../services/products.service';

declare var carouselFuncs: any;

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrls: ['./featured-items.component.css']
})

export class FeaturedItemsComponent implements OnInit {

  public productsUrl = "http://localhost:8080/featured";
  public items: Product[];

  constructor(private ProductsService: ProductsService) {
  }

  public getAllProducs() {
    this.ProductsService.getFeatured().subscribe(products => {
      console.log(products);
      this.items = products;
    });
    this.ProductsService.getFeatured().subscribe(products => {
      console.log("f1 ran");
      this.callFunction1();
    });
  }

  ngOnInit(): void {
    this.getAllProducs();
  }

  callFunction1() {
    carouselFuncs.func1();
  }
  callFunction2() {
    carouselFuncs.func2();
  }
  callFunction3() {
    carouselFuncs.func3();
  }
  callFunction4() {
    carouselFuncs.func4();
  }
  callFunction5() {
    carouselFuncs.func5();
  }
  callFunction6() {
    carouselFuncs.func6();
  }
}
