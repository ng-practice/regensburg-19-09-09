import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'ws-book-detail',
  styleUrls: ['./book-detail.component.scss'],
  templateUrl: 'book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
  public book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookDataService
  ) {
    this.book$ = this.route.params.pipe(
      filter(params => !!params.isbn),
      switchMap(params => this.bookService.getBookByIsbn(params.isbn))
    );
  }

  ngOnInit() {}
}
