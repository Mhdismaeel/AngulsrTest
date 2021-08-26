import { Component, OnInit } from '@angular/core';
import{HttpService} from 'src/app/services/http.service';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  constructor(private httpService:HttpService,private fb:FormBuilder,private router:Router) {
  this.registerForm=fb.group({
    'FirstName':['',Validators.required],
    'LastName':['',Validators.required],
    'Username':['',Validators.required],
    'Email':['',Validators.required],
    'Password':['',Validators.required]
  });
  }

  ngOnInit(): void {
  }

  OnSubmit():void
  {
    if(this.registerForm.invalid)
    {
      alert('please check form');
      return;
    }
    else
    {
      this.httpService.register(this.registerForm.value).subscribe((data:any)=>{
        console.log(data);
        this.registerForm.reset();
       this.router.navigate(['login']);
      }
      )
    }

  }


}
