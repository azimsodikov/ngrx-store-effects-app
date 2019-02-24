import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import * as fromPizzas from "./pizzas.reducers";

/**
 * Products state of the appliation
 */
export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}
/**
 * ActionReducerMap lets you type your reducers and makes sure you implementing correct reducers based on the different state
 * We are creating reducers object so we can pass it to the forFeature module in product module
 */
export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};

/**
 * We are creating selector with the help of function which accepts feature name that we passed to the feature module
 */
export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
);

/**
 * !Selectors are methods used for obtaining slices of store state
 * Selector for the whole pizza state
 */
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

/**
 * Selectors for one level down pizzaState
 */
export const getPizzasEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzasEntities
);

/**
 * Selector to flatten the object and return array values
 */
export const getAllPizzas = createSelector(
  getPizzasEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getAllPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoaded
);
export const getAllPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoading
);
