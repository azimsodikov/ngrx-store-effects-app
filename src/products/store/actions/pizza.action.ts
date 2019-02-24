import { Action  } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';
/**
 * LOAD_PIZZAS actions
 * We are namespacing actions bu putting '[Products]' load pizzas
 */
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

/**
 * Action classes which uses above read only properties
 */
export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}
export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: Pizza[]) {}
}
export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}


/**
 * Exporting actions
 */
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
