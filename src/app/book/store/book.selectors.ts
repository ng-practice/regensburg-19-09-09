import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookSlices } from '.';

const bookFeature = createFeatureSelector<BookSlices>('book');

export const allBooks = createSelector(
  bookFeature,
  f => f.list.books
);
