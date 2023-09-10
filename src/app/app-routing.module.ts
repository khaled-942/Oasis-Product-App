import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ProductsListComponent } from './products-container/products-list/products-list.component';
import { LoginGuardGuard } from './shared/guards/login-guard.guard';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'store', loadChildren: () =>
      import('./products-container/products-container.module').then((m) => m.ProductsContainerModule)
  },
  {
    path: 'cart', loadChildren: () =>
      import('./cart/cart.module').then((m) => m.CartModule), canActivate: [LoginGuardGuard]

  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
