import { Action, combineReducers } from '@ngrx/store';
import { RootState } from '../../reducers';
import { bookReducer, BookSlice } from './book.reducer';

export * from './book.actions';
export * from './book.reducer';

export interface BookSlices {
  list: BookSlice;
  // search-results
  // favourites
}

export interface BookFeature extends RootState {
  book: BookSlices;
}

export function bookReducers(state: BookSlices, action: Action) {
  return combineReducers<BookSlices>({
    list: bookReducer
  })(state, action);
}
