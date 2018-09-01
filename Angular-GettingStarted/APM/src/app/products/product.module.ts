import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent, ProductDetailGuard } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [ ProductDetailGuard ] }
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }
