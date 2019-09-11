/**
 *
 * switch(action.type) {
 *   case '[Books] Load all books': {...}
 * }
 *
 */
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Book } from '../shared/book';
import { createBookSuccess, loadAllBooksSuccess } from './book.actions';

export interface BookSlice extends EntityState<Book> {
  // books: Book[];
}
const adapter = createEntityAdapter<Book>({
  selectId: book => book.isbn
});

const initialState: BookSlice = adapter.getInitialState();

export const bookReducer = createReducer(
  initialState,
  on(loadAllBooksSuccess, (slice, { payload }) =>
    adapter.addAll(payload, slice)
  ),
  on(createBookSuccess, (slice, { payload }) => adapter.addOne(payload, slice))
);
