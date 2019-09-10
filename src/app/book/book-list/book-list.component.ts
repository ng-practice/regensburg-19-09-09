import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { BookFeature } from '../store';

@Component({
  selector: 'ws-book-list',
  styleUrls: ['./book-list.component.scss'],
  templateUrl: 'book-list.component.html'
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;

  // TODO: replace any with proper type
  // TODO: get rid of BookDataService
  constructor(
    private store: Store<BookFeature>,
    private bookData: BookDataService
  ) {}

  ngOnInit() {
    this.bookData.getBooks().subscribe();
    this.books$ = this.store.pipe(select(s => s.book.list.books));
  }
}
