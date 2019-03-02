import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromPizzas from "./pizzas.reducer";
import * as fromToppings from "./toppings.reducer";

/**
 * Products state of the appliation
 */
export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
  toppings: fromToppings.ToppingsState;
}
/**
 * ActionReducerMap lets you type your reducers and makes sure you implementing correct reducers based on the different state
 * We are creating reducers object so we can pass it to the forFeature module in product module
 */
export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer
};

/**
 * We are creating selector with the help of function which accepts feature name that we passed to the feature module
 */
export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
);
