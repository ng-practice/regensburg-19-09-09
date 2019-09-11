import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { emptyBook } from '../shared/book-empty';
import { BookFeature, createBook } from '../store';

@Component({
  selector: 'ws-book-new',
  styleUrls: ['./book-new.component.scss'],
  templateUrl: './book-new.component.html'
})
export class BookNewComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<BookFeature>) {}

  ngOnInit() {
    this.form = this.fb.group({
      isbn: [
        '',
        [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13)
        ]
      ],
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  create() {
    const book = { ...emptyBook(), ...this.form.value };
    this.store.dispatch(createBook({ payload: book }));
  }
}
