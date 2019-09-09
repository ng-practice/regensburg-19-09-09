import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDataService } from '../shared/book-data.service';
import { BookListComponent } from './book-list.component';

describe('<book-list>', () => {
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent],
      providers: [
        {
          provide: BookDataService,
          useValue: {}
        }
      ]
    });

    fixture = TestBed.createComponent(BookListComponent);
  });

  describe('When the component is rendered', () => {
    it('shows the title "Books"', () => {
      expect(fixture).toBeDefined();
    });
  });
});
