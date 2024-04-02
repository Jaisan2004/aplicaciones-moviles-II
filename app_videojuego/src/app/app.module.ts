import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RegiterComponent } from './regiter/regiter.component';
import { ProductsComponent } from './products/products.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    UserComponent, 
    RegiterComponent, 
    ProductsComponent,
  CarritoComponent,
LoginComponent],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
