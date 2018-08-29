import { Action } from "@ngrx/store";
import { Product } from "../product";

export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct = '[Product] Set Current Product',
    ClearCurrentProduct = '[Product] Clear Current Product',
    InitializeCurrentProduct = '[Product] Initialize Current Product',
    LoadProducts = '[Product] Load Products',
    LoadProductsSucceeded = '[Product] Load Products Succeeded',
    LoadProductsFailed = '[Product] Load Products Failed',
    AddProduct = '[Product] Add Product',
    AddProductSucceeded = '[Product] Add Product Succeeded',
    AddProductFailed = '[Product] Add Product Failed',
    UpdateProduct = '[Product] Update Product',
    UpdateProductSucceeded = '[Product] Update Product Succeeded',
    UpdateProductFailed = '[Product] Update Product Failed',
    RemoveProduct = '[Product] Remove Product',
    RemoveProductSucceeded = '[Product] Remove Product Succeeded',
    RemoveProductFailed = '[Product] Remove Product Failed'
}

export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode;

    constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct;

    constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct;
}

export class InitializeCurrentProduct implements Action {
    readonly type = ProductActionTypes.InitializeCurrentProduct;
}

export class LoadProducts implements Action {
    readonly type = ProductActionTypes.LoadProducts;
}

export class LoadProductsSucceeded implements Action {
    readonly type = ProductActionTypes.LoadProductsSucceeded;

    constructor(public payload: Product[]) { }
}

export class LoadProductsFailed implements Action {
    readonly type = ProductActionTypes.LoadProductsFailed;

    constructor(public payload: string) { }
}

export class AddProduct implements Action {
    readonly type = ProductActionTypes.AddProduct;

    constructor(public payload: Product) { }
}

export class AddProductSucceeded implements Action {
    readonly type = ProductActionTypes.AddProductSucceeded;

    constructor(public payload: Product) { }
}

export class AddProductFailed implements Action {
    readonly type = ProductActionTypes.AddProductFailed;

    constructor(public payload: string) { }
}

export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UpdateProduct;

    constructor(public payload: Product) { }
}

export class UpdateProductSucceeded implements Action {
    readonly type = ProductActionTypes.UpdateProductSucceeded;

    constructor(public payload: Product) { }
}

export class UpdateProductFailed implements Action {
    readonly type = ProductActionTypes.UpdateProductFailed;

    constructor(public payload: string) { }
}

export class RemoveProduct implements Action {
    readonly type = ProductActionTypes.RemoveProduct;

    constructor(public payload: number) { }
}

export class RemoveProductSucceeded implements Action {
    readonly type = ProductActionTypes.RemoveProductSucceeded;

    constructor(public payload: number) { }
}

export class RemoveProductFailed implements Action {
    readonly type = ProductActionTypes.RemoveProductFailed;

    constructor(public payload: string) { }
}

export type ProductActions = ToggleProductCode
    | SetCurrentProduct
    | ClearCurrentProduct
    | InitializeCurrentProduct
    | LoadProducts
    | LoadProductsSucceeded
    | LoadProductsFailed
    | AddProduct
    | AddProductSucceeded
    | AddProductFailed
    | UpdateProduct
    | UpdateProductSucceeded
    | UpdateProductFailed
    | RemoveProduct
    | RemoveProductSucceeded
    | RemoveProductFailed;
