import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookFeature, loadAllBooks } from './store';

@Component({
  selector: 'ws-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
  // TODO: Replace any with proper typing
  constructor(private store: Store<BookFeature>) {}

  ngOnInit(): void {
    this.store.dispatch(loadAllBooks());
  }
}
