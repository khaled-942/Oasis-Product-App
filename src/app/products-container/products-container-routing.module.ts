import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { DetailsComponent } from './details/details.component';
import { NamesearchComponent } from './namesearch/namesearch.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent
  },
  {
    path: 'item/:id',
    component: DetailsComponent
  },
  {
    path: 'search',
    component: NamesearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsContainerRoutingModule { }
