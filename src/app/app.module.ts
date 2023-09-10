import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ProductsContainerModule } from './products-container/products-container.module';
import { ProductsContainerRoutingModule } from './products-container/products-container-routing.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsContainerRoutingModule,
    SharedModule,
    AuthenticationModule,
    ProductsContainerModule,
    CartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
