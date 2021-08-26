import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCoustomerComponent } from './components/add-coustomer/add-coustomer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [{path:'',component:RegisterComponent},
{path:'product',component:ProductListComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'customer',children:[{path:'',component:CustomerComponent},
{path:'storeCustomer',component:AddCoustomerComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
