import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full'},
                        { path: 'login', component: LoginComponent},
                        { path: 'menu/:id', component: MenuComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
