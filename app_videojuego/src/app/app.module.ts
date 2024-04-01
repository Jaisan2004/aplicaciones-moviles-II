import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RegiterComponent } from './regiter/regiter.component';
import { ProductsComponent } from './products/products.component';
import { CarritoComponent } from './carrito/carrito.component';



@NgModule({
  declarations: [
    UserComponent, 
    RegiterComponent, 
    ProductsComponent,
  CarritoComponent],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
