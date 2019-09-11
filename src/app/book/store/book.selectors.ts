import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookSlices } from '.';
import { selectRouteParam } from '../../reducers';
import { adapter } from './book.reducer';

const bookFeature = createFeatureSelector<BookSlices>('book');
const bookSlices = createSelector(
  bookFeature,
  f => f.list
);

// export adapter from reducer.ts
const selectors = adapter.getSelectors(bookSlices);

export const allBooks = selectors.selectAll;

export const currentBook = createSelector(
  selectors.selectEntities,
  selectRouteParam('isbn'),
  (books, isbn) => books[isbn]
);
