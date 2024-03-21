import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RegiterComponent } from './regiter/regiter.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [UserComponent, RegiterComponent, ProductsComponent],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
