import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { BookDataService } from '../shared/book-data.service';
import {
  createBook,
  createBookSuccess,
  loadAllBooks,
  loadAllBooksSuccess
} from './book.actions';

@Injectable()
export class BookEffects {
  loadAllBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllBooks),
      switchMap(() => this.bookService.getBooks()),
      map(books => loadAllBooksSuccess({ payload: books }))
    )
  );

  createBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createBook),
      exhaustMap(({ payload }) => this.bookService.createBook(payload)),
      map(books => createBookSuccess({ payload: books }))
    )
  );

  navigateToListOnSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createBookSuccess),
        tap(() => this.router.navigateByUrl('/books'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private bookService: BookDataService,
    private router: Router
  ) {}
}
