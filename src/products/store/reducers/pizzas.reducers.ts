// Loading everything from the actions folder
import * as fromPizzas from '../actions/pizza.action';
import { Pizza } from 'src/products/models/pizza.model';

/**
 * This is the piece of state that our reducer is gonna manage
 */
export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

/**
 * Inital state of the application
 */
export const initialState: PizzaState = {
  data: [
    {
      "name": "Blazin' Inferno",
      "toppings": [
        {
          "id": 10,
          "name": "pepperoni"
        },
        {
          "id": 9,
          "name": "pepper"
        },
        {
          "id": 3,
          "name": "basil"
        },
        {
          "id": 4,
          "name": "chili"
        },
        {
          "id": 7,
          "name": "olive"
        },
        {
          "id": 2,
          "name": "bacon"
        }
      ],
      "id": 1
    }
  ],
  loaded: false,
  loading: false
}

/**
 *
 * @param state of the application
 * @param action type that needs to be performed
 */
export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {

  switch(action.type) { // Since we are typing this all the actions from the pizza actions, we get all the action options
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      }
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      }
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }
  }

  return state;
}
/**
 * Small functions that gets small parts of the pizza state
 * It will help us compose things
 * @param state of the pizza
 */
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;
