import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { HttpService } from 'src/app/services/http.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  isLoading:boolean=true;
  customers:Customer[];
  displayedColumns: string[] = ['Id', 'Name', 'Gender', 'Phone'];
  dataSource: MatTableDataSource<Customer>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer()
  {
    this.httpService.getCustomer().subscribe((data:Customer[])=>{
      this.dataSource = new MatTableDataSource(data);
      this.isLoading=false;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
