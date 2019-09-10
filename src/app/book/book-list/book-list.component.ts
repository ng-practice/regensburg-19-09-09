import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';
import { BookFeature } from '../store';

@Component({
  selector: 'ws-book-list',
  styleUrls: ['./book-list.component.scss'],
  templateUrl: 'book-list.component.html'
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private store: Store<BookFeature>) {}

  ngOnInit() {
    this.books$ = this.store.pipe(select(s => s.book.list.books));
  }
}
