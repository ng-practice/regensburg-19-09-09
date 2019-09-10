import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { instance, mock, when } from 'ts-mockito';
import { BookDataService } from '../shared/book-data.service';
import { emptyBook } from '../shared/book-empty';
import { BookListComponent } from './book-list.component';

describe('<book-list>', () => {
  let fixture: ComponentFixture<BookListComponent>;
  let serviceMock: BookDataService;

  beforeEach(() => {
    serviceMock = mock(BookDataService);

    when(serviceMock.getBooks()).thenReturn(
      of([emptyBook(), emptyBook(), emptyBook()])
    );

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BookListComponent],
      providers: [
        {
          provide: BookDataService,
          useFactory: () => instance(serviceMock)
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(BookListComponent);
    fixture.detectChanges();
  });

  describe('When the component is rendered', () => {
    it('shows the title "Books"', () => {
      const title: HTMLHeadElement = fixture.debugElement.query(
        By.css('h3[mat-subheader]')
      ).nativeElement;

      expect(title.innerHTML).toBe('Books');
    });

    it('renders books', () => {
      const books: DebugElement[] = fixture.debugElement.queryAll(
        By.css('.book-single')
      );
      expect(books).toHaveLength(3);
    });
  });
});
