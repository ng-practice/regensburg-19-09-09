import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface RootState {
  // router
  // layout
}

export const reducers: ActionReducerMap<RootState> = {};

export const metaReducers: MetaReducer<RootState>[] = !environment.production
  ? []
  : [];
