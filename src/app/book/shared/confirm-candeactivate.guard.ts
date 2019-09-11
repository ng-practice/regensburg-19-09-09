import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmCandeactivateGuard
  implements CanDeactivate<BookDetailComponent> {
  canDeactivate(): boolean {
    // Make this guard a noop
    // return confirm('Are you sure?');
    return true;
  }
}
