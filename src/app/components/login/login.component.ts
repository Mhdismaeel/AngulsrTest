import { Component, OnInit } from '@angular/core';
import{HttpService} from 'src/app/services/http.service';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Token } from 'src/app/interfaces/token';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private httpService:HttpService,private fb:FormBuilder,private router:Router) {
    this.loginForm=this.fb.group({
     'Email':['',Validators.required],
     'Password':['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  onSubmit():void
  {
    if(this.loginForm.invalid)
    {
      alert('check your form');
      return;
    }
    else
    {
      this.httpService.login(this.loginForm.value).subscribe((data:Token)=>{
        console.log(data);
        localStorage.setItem('Token',data.Token);
        localStorage.setItem('RefreshToken',data.RefreshToken);
        this.router.navigate(['customer']);
      })
    }
  }

}
