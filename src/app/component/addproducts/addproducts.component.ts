import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {
  productForm:FormGroup=new FormGroup({});

  constructor(private fb:FormBuilder, private service:ProductsService){
    this.productForm=this.fb.group({
      productId:['',Validators.required],
      productName:['',Validators.required],
      productPrice:['',Validators.required],
      productModel:['',Validators.required],
      productImage:['',Validators.required]

    })
  }
result:any;
  addNow(){
    this.service.addProduct(this.productForm.value);
    this.productForm.reset()
  
  Swal.fire({
  title: 'Success!',
  text: this.result,
  icon: 'success',
  confirmButtonText: 'OK'
});

}
}
