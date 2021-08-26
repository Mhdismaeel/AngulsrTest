import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/interfaces/customer';
import { Order } from 'src/app/interfaces/order';
import { Product } from 'src/app/interfaces/product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  CustomersList:Customer[];
  ProductList:Product[];
  OrderForm:FormGroup;
  constructor(private httpService:HttpService,private fb:FormBuilder) {

    this.OrderForm=this.fb.group({
      'OrderDate':[new Date(),Validators.required],
      'CustomerId':['',Validators.required],
      'OrderDetails':this.fb.array([]),
      'PaidAmount':['',Validators.required],
    });
  }

  ngOnInit(): void {
    this.getCustomer();
    this.getProduct();
  }


  get OrderDetails()
  {
    return this.OrderForm.get('OrderDetails') as FormArray;
  }

  getCustomer()
  {
    this.httpService.getCusomers().subscribe((data:Customer[])=>{
      this.CustomersList=data;
      console.log(this.CustomersList);
    })
  }


  getProduct()
  {
    this.httpService.getProducts().subscribe((data:Product[])=>{
      this.ProductList=data;
      console.log(this.ProductList);
    })
  }

  addOrderDetails(product:Product)
  {
    const orderDetailForm=this.OrderDetails.controls.find(x=> x.get('ProductId').value===product.Id);
    if(orderDetailForm)
    {
      this.addOne(orderDetailForm.get('Count'));

      return;
    }

    this.OrderDetails.push( this.fb.group({
      'ProductName':[product.Name],
      'ProductId':[product.Id],
      'Count':[1],
      'UnitPrice':[product.InitialPrice],
    }));

  }

  addOne(countControl:AbstractControl)
  {
    countControl.setValue(countControl.value + 1);
  }



  Submit()
  {
    this.httpService.postOrder(this.OrderForm.value).subscribe((data:Order)=>{
      console.log(data);
      this.OrderForm.reset();
    })


  }


}
