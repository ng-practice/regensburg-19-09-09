/**
 * {
 *    type: ''
 *    payload: {}
 * }
 */

import { createAction, props } from '@ngrx/store';
import { Book } from '../shared/book';

export const loadAllBooks = createAction('[Book] Load all books');

export const loadAllBooksSuccess = createAction(
  '[Book] Loading all books was successful',
  props<{ payload: Book[] }>()
);

// store.dispatch(createBook({ payload: book }))
export const createBook = createAction(
  '[Book] Create new book',
  props<{ payload: Book }>()
);

export const createBookSuccess = createAction(
  '[Book] Successfully created new Book',
  props<{ payload: Book }>()
);
