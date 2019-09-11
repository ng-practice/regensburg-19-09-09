import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { BookNewComponent } from '../book-new/book-new.component';

@Injectable()
export class FormDeactivationGuard implements CanDeactivate<BookNewComponent> {
  canDeactivate(component: BookNewComponent): boolean {
    // Make this guard a noop
    // if (component.form.invalid) {
    //   alert('Your form is invalid');
    //   return false;
    // }

    return true;
  }
  constructor() {}
}
