import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BookFeature, loadAllBooksSuccess } from '../store';
import { Book } from './book';

@Injectable({ providedIn: 'root' })
export class BookDataService {
  // TODO: Replace any with proper typing
  constructor(private http: HttpClient, private store: Store<BookFeature>) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books').pipe(
      // TODO: Remove store from service | Use an effect instead
      tap(books =>
        this.store.dispatch(loadAllBooksSuccess({ payload: books }))
      ),
      catchError(() =>
        throwError({
          message: 'Sorry, Books could not be loaded. Please call emergency 🚑.'
        })
      )
    );
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:4730/books/${isbn}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:4730/books', book);
  }

  updateBook(isbn: string, vector: any): Observable<Book> {
    return this.http.patch<Book>(`http://localhost:4730/books/${isbn}`, vector);
  }
}
