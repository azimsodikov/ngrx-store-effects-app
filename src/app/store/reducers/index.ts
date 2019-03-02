import {
  Params,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import * as fromRouter from "@ngrx/router-store";

/**
 * Router State Url interface
 */
export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}
/**
 * State of the router
 */
export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer
};

/**
 * SELECTORS
 */
export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>("routerReducer");

/**
 * CUSTOM SERIALIZERS
 */
export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    /**
     * This object is going to be binded to the router and any time route changes, this function gets called;
     */
    return { url, queryParams, params };
  }
}
