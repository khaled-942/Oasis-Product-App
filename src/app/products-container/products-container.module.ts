import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsContainerRoutingModule } from './products-container-routing.module';
import { DetailsComponent } from './details/details.component';
import { ItemComponent } from './item/item.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SharedModule } from '../shared/shared.module';
import { LoaderComponent } from './loader/loader.component';
import { AlertsComponent } from './alerts/alerts.component';


@NgModule({
  declarations: [
    DetailsComponent,
    ItemComponent,
    ProductsListComponent,
    LoaderComponent,
    AlertsComponent,
  ],
  imports: [
    CommonModule,
    ProductsContainerRoutingModule, SharedModule
  ],
  exports: [
    DetailsComponent,
    ItemComponent,
    ProductsListComponent,
    LoaderComponent,
    AlertsComponent,
  ]
})
export class ProductsContainerModule { }
