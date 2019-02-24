// Loading everything from the actions folder
import * as fromPizzas from "../actions/pizza.action";
import { Pizza } from "src/products/models/pizza.model";

/**
 * This is the piece of state that our reducer is gonna manage
 */
export interface PizzaState {
  entities: { [id: number]: Pizza };
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

/**
 * Inital state of the application
 */
export const initialState: PizzaState = {
  entities: {},
  data: [],
  loaded: false,
  loading: false
};

/**
 *
 * @param state of the application
 * @param action type that needs to be performed
 */
export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {
  switch (
    action.type // Since we are typing this all the actions from the pizza actions, we get all the action options
  ) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      const pizzas = action.payload;

      /**
       * We are spreading the array to objects to easily look it up instead of looping through the array each time we want piece of it;
       * By converting them to objects with keys we can easily look up them when needed;
       */
      const entities = pizzas.reduce(
        (entities: { [id: number]: Pizza }, pizza: Pizza) => {
          return {
            ...entities,
            [pizza.id]: pizza
          };
        },
        {
          ...state.entities
        }
      );
      console.log(entities);
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}
/**
 * Small functions that gets small parts of the pizza state
 * It will help us compose things
 * @param state of the pizza
 */
export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
