import * as fromRouterStore from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { Params, ActivatedRouteSnapshot, RouterStateSnapshot, RouterState } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { platformCoreDynamicTesting } from '@angular/platform-browser-dynamic/testing/src/platform_core_dynamic_testing';

export interface IRouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}


// State of the application
export interface IState {
    routerReducer: fromRouterStore.RouterReducerState<IRouterStateUrl>;
}


export const reducers: ActionReducerMap<IState> = {
    routerReducer: fromRouterStore.routerReducer
};

// router state selector
export const getRouterState = createFeatureSelector<fromRouterStore.RouterReducerState<IRouterStateUrl>>('routerReducer');


export class CustomSerializer implements fromRouterStore.RouterStateSerializer<IRouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
        const { url } = routerState;
        const { params } = routerState.root;
        const { queryParams } = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
            if (state.firstChild && state.firstChild.params) {
                state.params = state.firstChild.params;
            }
        }
        return { url, params, queryParams };
    }

}
