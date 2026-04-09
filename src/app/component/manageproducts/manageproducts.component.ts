import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrl: './manageproducts.component.css'
})
export class ManageproductsComponent {

  constructor(private service:ProductsService){}
  products:any;
  ngOnInit(){
    this.service.getProducts().subscribe((res)=>{
      this.products=res;
    })
  }
  result:any;
  deleteNow(pid:any){
    this.result=this.service.deleteProduct(pid)
    alert(this.result)

  }

  dummy={
    productId:"",
    productName:"",
    productPrice:"",
    productModel:"",
    productImage:""
  }

  updateToDummy(upobj:any){
    this.dummy=upobj;
    console.log(this.dummy)
  }
  StoreInService(){
    this.result=this.service.updateProduct(this.dummy);
    alert(this.result)
    
  }

}
