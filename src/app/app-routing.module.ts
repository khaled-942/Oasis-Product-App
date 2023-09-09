import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ProductsListComponent } from './products-container/products-list/products-list.component';
import { DetailsComponent } from './products-container/details/details.component';
import { CartComponent } from './products-container/cart/cart.component';
import { LoginGuardGuard } from './shared/guards/login-guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'store', loadChildren: () =>
  import('./products-container/products-container.module').then((m) => m.ProductsContainerModule)},
  { path: 'store/:id', component: DetailsComponent },
  { path: 'cart', component: CartComponent, canActivate: [LoginGuardGuard] },
  { path: '**', component: ProductsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
