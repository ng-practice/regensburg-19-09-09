import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { BookDataService } from '../shared/book-data.service';
import { BookStaticAsyncDataService } from '../shared/book-static-async-data.service';
import { BookEditComponent } from './book-edit.component';

describe('<book-edit>', () => {
  let fixture: ComponentFixture<BookEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookEditComponent],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([]),
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: BookDataService, useClass: BookStaticAsyncDataService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(BookEditComponent);
    fixture.detectChanges();
  });

  describe('When no author is set', () => {
    it('shows a validation message', fakeAsync(() => {
      const authorInput: HTMLInputElement = fixture.debugElement.query(
        By.css('input[name=author]')
      ).nativeElement;

      authorInput.value = '';
      authorInput.dispatchEvent(new Event('input'));
      authorInput.dispatchEvent(new Event('blur'));

      tick();
      fixture.detectChanges();

      console.log(fixture.componentInstance.book);

      expect(fixture).toMatchSnapshot();
    }));
  });
});
