import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as productActions from './product.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Product } from '../product';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects
{
  constructor(private actions$: Actions,
    private productService: ProductService) { }

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.LoadProducts),
    mergeMap((action: productActions.LoadProducts) =>
      this.productService.getProducts().pipe(
        map((products: Product[]) => (new productActions.LoadProductsSucceeded(products))),
        catchError(err => of(new productActions.LoadProductsFailed(err)))
    ))
  )

  @Effect()
  addProduct$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.AddProduct),
    map((action: productActions.AddProduct) => action.payload),
    mergeMap((product: Product) =>
    this.productService.createProduct(product).pipe(
      map((newProduct: Product) => (new productActions.AddProductSucceeded(newProduct))),
      catchError(err => of(new productActions.AddProductFailed(err)))
    ))
  )

  @Effect()
  updateProduct$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.UpdateProduct),
    map((action: productActions.UpdateProduct) => action.payload),
    mergeMap((product: Product) =>
      this.productService.updateProduct(product).pipe(
        map((updatedProduct: Product) => (new productActions.UpdateProductSucceeded(updatedProduct))),
        catchError(err => of(new productActions.UpdateProductFailed(err)))
    ))
  )

  @Effect()
  removeProduct$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.RemoveProduct),
    map((action: productActions.RemoveProduct) => action.payload),
    mergeMap((productId: number) =>
    this.productService.deleteProduct(productId).pipe(
      map(() => (new productActions.RemoveProductSucceeded(productId))),
      catchError(err => of(new productActions.RemoveProductFailed(err)))
    ))
  )
}
