import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Product } from '../../product';

import { Store, select } from '@ngrx/store';
import * as fromProduct from '../../state';
import * as productActions from '../../state/product.actions';

import { Observable } from 'rxjs';

@Component({
  templateUrl: './product-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductShellComponent implements OnInit {
  displayCode$: Observable<boolean>;
  errorMessage$: Observable<string>;
  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  
  constructor(private store: Store<fromProduct.State>) { }

  ngOnInit(): void {
    this.store.dispatch(new productActions.LoadProducts());
    
    this.displayCode$ = this.store.pipe(select(fromProduct.getShowProductCode)); 
    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
    this.selectedProduct$ = this.store.pipe(select(fromProduct.getCurrentProduct));
  }
  
  checkChanged(value: boolean): void {
    this.store.dispatch(new productActions.ToggleProductCode(value));
  }

  newProduct(): void {
    this.store.dispatch(new productActions.InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(new productActions.SetCurrentProduct(product));
  }

  removeProduct(productId: number): void {
    this.store.dispatch(new productActions.RemoveProduct(productId));
  }

  clearCurrentProduct(): void {
    this.store.dispatch(new productActions.ClearCurrentProduct());
  }

  addProduct(product: Product): void {
    this.store.dispatch(new productActions.AddProduct(product));
  }

  updateProduct(product: Product): void {
    this.store.dispatch(new productActions.UpdateProduct(product));
  }
}
