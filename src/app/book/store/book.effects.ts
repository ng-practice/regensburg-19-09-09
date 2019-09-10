import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { BookDataService } from '../shared/book-data.service';
import { loadAllBooks, loadAllBooksSuccess } from './book.actions';

@Injectable()
export class BookEffects {
  loadAllBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllBooks),
      switchMap(() => this.bookService.getBooks()),
      map(books => loadAllBooksSuccess({ payload: books }))
    )
  );

  constructor(
    private actions$: Actions,
    private bookService: BookDataService
  ) {}
}
