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
  on(loadAllBooksSuccess, (slice, { payload }) => ({
    ...slice,
    books: payload
  })),
  on(createBookSuccess, (slice, { payload }) => ({
    ...slice,
    books: [...slice.books, payload]
  }))
);
