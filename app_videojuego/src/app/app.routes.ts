import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegiterComponent } from './regiter/regiter.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {path: '', redirectTo: "/inicio", pathMatch : "full"},
    {path: 'inicio', component: UserComponent},
    {path: 'registro', component: RegiterComponent},
    {path: 'productos', component: ProductsComponent}
];
