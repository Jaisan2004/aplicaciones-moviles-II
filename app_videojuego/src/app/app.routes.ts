import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegiterComponent } from './regiter/regiter.component';

export const routes: Routes = [
    {path: '', redirectTo: "/inicio", pathMatch : "full"},
    {path: 'inicio', component: UserComponent},
    {path: 'registro', component: RegiterComponent}
];
