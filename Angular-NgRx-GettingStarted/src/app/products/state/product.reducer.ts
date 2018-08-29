import { Product } from "../product";
import { ProductActions, ProductActionTypes } from "./product.actions";

export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: ''
};

export function reducer(state = initialState, action: ProductActions): ProductState {
  switch (action.type) {
    case ProductActionTypes.ToggleProductCode:
      return {
        ...state,
        showProductCode: action.payload
      };

    case ProductActionTypes.SetCurrentProduct:
      return {
        ...state,
        currentProductId: action.payload.id
      };

    case ProductActionTypes.ClearCurrentProduct:
      return {
        ...state,
        currentProductId: null
      };

    case ProductActionTypes.InitializeCurrentProduct:
      return {
        ...state,
        currentProductId: 0
      };

    case ProductActionTypes.LoadProductsSucceeded:
      return {
        ...state,
        products: action.payload,
        error: '' 
      };

    case ProductActionTypes.LoadProductsFailed:
      return {
        ...state,
        products: [],
        error: action.payload
      };

    case ProductActionTypes.AddProductSucceeded:
      return {
        ...state,
        products: [...state.products, action.payload],
        currentProductId: action.payload.id,
        error: ''
      };

    case ProductActionTypes.AddProductFailed:
      return {
        ...state,
        error: action.payload
      };

    case ProductActionTypes.UpdateProductSucceeded:
      const updatedProducts = state.products.map(
        item => action.payload.id === item.id ? action.payload : item);
      
      return {
        ...state,
        products: updatedProducts,
        currentProductId: action.payload.id,
        error: ''
      };

    case ProductActionTypes.UpdateProductFailed:
      return {
        ...state,
        error: action.payload
      };

    case ProductActionTypes.RemoveProductSucceeded:
      return {
        ...state,
        products: state.products.filter(product => product.id != action.payload),
        currentProductId: null,
        error: ''
      }

    case ProductActionTypes.RemoveProductFailed:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}
