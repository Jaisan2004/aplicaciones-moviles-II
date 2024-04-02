import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegiterComponent } from './regiter/regiter.component';
import { ProductsComponent } from './products/products.component';
import { CarritoComponent } from './carrito/carrito.component';
import { TiendaComponent } from './tienda/tienda.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', redirectTo: "/inicio", pathMatch : "full"},
    {path: 'inicio', component: UserComponent},
    {path: 'registro', component: RegiterComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: 'carrito', component: CarritoComponent},
    {path: 'login', component: LoginComponent},
];
