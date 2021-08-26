import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from './services/http.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PrimaryInterceptor } from './services/primary.interceptor';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './components/customer/customer.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { AddCoustomerComponent } from './components/add-coustomer/add-coustomer.component';
import {MatSelectModule} from '@angular/material/select';
//******************************************************** */
import { ProductListComponent } from './components/product-list/product-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CustomerComponent,
    AddCoustomerComponent,ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,MatButtonModule,MatInputModule,MatCardModule,MatFormFieldModule,
    HttpClientModule,ReactiveFormsModule,MatTableModule,MatPaginatorModule,MatProgressSpinnerModule,MatIconModule,
    MatSelectModule,MatSidenavModule,MatGridListModule
  ],
  providers: [HttpService,{provide:HTTP_INTERCEPTORS,useClass:PrimaryInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
