import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  products=[
    {
      productId:'1',
      productName:'Oneplus watch 2',
      productPrice:'15000',
      productModel:'digital',
      productImage:'https://rukminim2.flixcart.com/image/480/640/xif0q/smartwatch/n/p/c/-original-imagycnnb6xygqmk.jpeg?q=90'
    },
       {
      productId:'2',
      productName:'Casio Gshock',
      productPrice:'12000',
      productModel:'analog automatic',
      productImage:'https://m.media-amazon.com/images/I/61E+kMgwUVL._AC_UY1000_.jpg'
    },
       {
      productId:'3',
      productName:'Sonata sleek',
      productPrice:'5000',
      productModel:'analog',
      productImage:'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwae55cb5c/images/Sonata/Catalog/7147NM01_1.jpg?sw=800&sh=800'
    },
      {
      productId:'4',
      productName:'police',
      productPrice:'15000',
      productModel:'analog',
      productImage:'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7e4e0c61/images/Helios/Catalog/PLPEWGM0071801_1.jpg?sw=360&sh=360'
    }
  ]

  getProducts(){
    return of(this.products);
  }
  addProduct(obj:any){
    this.products.push(obj);
  }
  deleteProduct(pid:any){
    var Index=this.products.findIndex((p)=>p.productId==pid);
    if(Index != -1){
      this.products.splice(Index, 1);
      return "product Deleted"
    }
    else{
      return "something went wrong"
    }

  }
  updateProduct(obj:any){
    var Index=this.products.findIndex((p)=> this.products == obj.id);
    if(Index != -1){
      this.products.splice(Index, 1, obj);
      return "Product Updated"
    }
    else{
      return "something went wrong"
    }
    }

  }

  



