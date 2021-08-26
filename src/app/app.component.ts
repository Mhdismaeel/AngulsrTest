import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck {
  title = 'workShop';
  isShow:boolean;
  constructor(private httpService:HttpService,private router:Router){}
  ngDoCheck(): void {
 if(localStorage.getItem('Token')===null)
 {
  this.isShow=true;
 }
 else{
  this.isShow=false;

 }
  }

  ngOnInit(): void {

  }

  logout():void{
    localStorage.clear();
    this.router.navigate(['']);
  }


}
