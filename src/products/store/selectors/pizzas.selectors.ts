import { createSelector } from "@ngrx/store";
import { Pizza } from "./../../models/pizza.model";

import * as fromRoot from "../../../app/store";
import * as fromFeature from "../reducers";
import * as fromPizzas from "../reducers/pizzas.reducers";

/**
 * !Selectors are methods used for obtaining slices of store state
 * Selector for the whole pizza state
 */
export const getPizzaState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.pizzas
);

/**
 * Selectors for one level down pizzaState
 */
export const getPizzasEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzasEntities
);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  fromRoot.getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId];
  }
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
