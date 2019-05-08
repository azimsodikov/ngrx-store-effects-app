import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
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
 * Creating selector for particular state of the application starting from the root state which is registered in the feature module
 */
export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
);
