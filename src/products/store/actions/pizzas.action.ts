import { Action } from "@ngrx/store";

import { Pizza } from "../../models/pizza.model";
/**
 * !LOAD_PIZZAS actions
 * We are namespacing actions bu putting '[Products]' load pizzas
 */
export const LOAD_PIZZAS = "[Products] Load Pizzas";
export const LOAD_PIZZAS_FAIL = "[Products] Load Pizzas Fail";
export const LOAD_PIZZAS_SUCCESS = "[Products] Load Pizzas Success";

/**
 * Action classes which uses above read only properties
 */
export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}
/** Payload fails needed to pass the error messages from the server */
export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}
export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

/**
 * !CREATE_PIZZAS actions
 */
export const CREATE_PIZZA = "[Products] Create Pizza";
export const CREATE_PIZZA_FAIL = "[Products] Create Pizza Fail";
export const CREATE_PIZZA_SUCCESS = "[Products] Create Pizza Success";

export class CreatePizza implements Action {
  readonly type = CREATE_PIZZA;
  constructor(public payload: Pizza) {}
}
export class CreatePizzaFail implements Action {
  readonly type = CREATE_PIZZA_FAIL;
  constructor(public payload: any) {}
}
export class CreatePizzaSuccess implements Action {
  readonly type = CREATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

/**
 * !UPDATE_PIZZA actions
 */
export const UPDATE_PIZZA = "[Products] Update Pizza";
export const UPDATE_PIZZA_FAIL = "[Products] Update Pizza Fail";
export const UPDATE_PIZZA_SUCCESS = "[Products] Update Pizza Success";

export class UpdatePizza implements Action {
  readonly type = UPDATE_PIZZA;
  constructor(public payload: Pizza) {}
}
export class UpdatePizzaFail implements Action {
  readonly type = UPDATE_PIZZA_FAIL;
  constructor(public payload: any) {}
}
export class UpdatePizzaSuccess implements Action {
  readonly type = UPDATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

/**
 * !REMOVE_PIZZA actions
 */
export const REMOVE_PIZZA = "[Products] Remove Pizza";
export const REMOVE_PIZZA_FAIL = "[Products] Remove Pizza Fail";
export const REMOVE_PIZZA_SUCCESS = "[Products] Remove Pizza Success";

export class RemovePizza implements Action {
  readonly type = REMOVE_PIZZA;
  constructor(public payload: Pizza) {}
}
export class RemovePizzaFail implements Action {
  readonly type = REMOVE_PIZZA_FAIL;
  constructor(public payload: any) {}
}
export class RemovePizzaSuccess implements Action {
  readonly type = REMOVE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

/**
 * Exporting actions
 */
export type PizzasAction =
  | LoadPizzas
  | LoadPizzasFail
  | LoadPizzasSuccess
  | CreatePizza
  | CreatePizzaFail
  | CreatePizzaSuccess
  | UpdatePizza
  | UpdatePizzaFail
  | UpdatePizzaSuccess
  | RemovePizza
  | RemovePizzaFail
  | RemovePizzaSuccess;