import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpService: HttpClient) { }

  public getFeatured() : Observable<Product[]> {
    return this.httpService.get<Product[]>("/featured").pipe(map(data => data.map(data => new Product().deserialize(data))));
  }

  public getSearchRes(tag: string) : Observable<Product[]> {
    return this.httpService.get<Product[]>("/search/" + tag).pipe(map(data => data.map(data => new Product().deserialize(data))));
  }
}
