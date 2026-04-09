import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrl: './viewproducts.component.css'
})
export class ViewproductsComponent {
  constructor(private service:ProductsService){}
  products:any;
  ngOnInit(){
    this.service.getProducts().subscribe((res)=>{
      this.products=res;
    })
  }

}
