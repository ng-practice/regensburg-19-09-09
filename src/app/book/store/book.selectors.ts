import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookSlices } from '.';
import { selectRouteParam } from '../../reducers';

const bookFeature = createFeatureSelector<BookSlices>('book');

export const allBooks = createSelector(
  bookFeature,
  f => Object.values(f.list.entities)
);

export const currentBook = createSelector(
  allBooks,
  selectRouteParam('isbn'),
  (books, isbn) => books.find(book => book.isbn.toString() === isbn)
);
