import { InjectionToken } from '@angular/core';
import {
  getSelectors,
  routerReducer,
  RouterReducerState
} from '@ngrx/router-store';
import {
  Action,
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface RootState {
  router: RouterReducerState;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<RootState, Action>
>('Root reducers token', {
  factory: () => ({
    router: routerReducer
  })
});

const routerFeature = createFeatureSelector<RouterReducerState>('router');

export const { selectRouteParam } = getSelectors(routerFeature);

export const metaReducers: MetaReducer<RootState>[] = !environment.production
  ? []
  : [];
