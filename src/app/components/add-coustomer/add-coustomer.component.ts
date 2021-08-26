import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/interfaces/customer';
import{HttpService} from 'src/app/services/http.service';

@Component({
  selector: 'app-add-coustomer',
  templateUrl: './add-coustomer.component.html',
  styleUrls: ['./add-coustomer.component.css']
})
export class AddCoustomerComponent implements OnInit {

  Gender:string[]=['Male','Female'];
  customerForm:FormGroup;
  constructor(private httpService:HttpService,private fb:FormBuilder) {
    this.customerForm=fb.group({
     'Name':['',Validators.required],
     'Gender':['',Validators.required],
     'Phone':['',Validators.required]

    });
   }

  ngOnInit(): void {
  }

  onSubmit()
  {
    if(this.customerForm.invalid)
    {
      alert('check your form');
      return;
    }
    else
    {
      this.httpService.postCustomer(this.customerForm.value).subscribe((data:Customer)=>{
        console.log(data);
        this.customerForm.reset();
      })
    }
  }

}
