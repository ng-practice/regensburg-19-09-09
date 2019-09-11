/**
 *
 * switch(action.type) {
 *   case '[Books] Load all books': {...}
 * }
 *
 */
import { createReducer, on } from '@ngrx/store';
import { Book } from '../shared/book';
import { createBookSuccess, loadAllBooksSuccess } from './book.actions';

export interface BookSlice {
  books: Book[];
}

const initialState: BookSlice = { books: [] };

export const bookReducer = createReducer(
  initialState,
  on(loadAllBooksSuccess, (state, action) => {
    const nextState = { ...state };
    nextState.books = action.payload;
    return nextState;
  }),
  on(createBookSuccess, (state, { payload }) => ({
    ...state,
    books: [...state.books, payload]
  }))
);
