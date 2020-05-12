import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import {ProductsService} from '../services/products.service';

declare var seaResFunc: any;

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public products: Product[];
  public tag: string;

  constructor(private ProductsService: ProductsService) { }

  ngOnInit(): void {
  }

  public searchFunc() {

    console.log(this.tag);

    this.ProductsService.getSearchRes(this.tag).subscribe(products => {
      console.log(products);
      this.products = products;
    });

    this.ProductsService.getSearchRes(this.tag).subscribe(products => {
      console.log("populating results");
      seaResFunc.func1(this.products);
    });
  }
}
