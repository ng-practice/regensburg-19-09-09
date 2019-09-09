import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BookDataService } from './book-data.service';

describe('[HTTP] book-data', () => {
  let httpMock: HttpTestingController;
  let service: BookDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookDataService]
    });

    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(BookDataService);
  });

  afterEach(() => httpMock.verify());

  describe('When books are loaded successfully', () => {
    it('yields a list of books', done => {
      service.getBooks().subscribe(books => {
        expect(books).toHaveLength(1);
        done();
      });

      httpMock.expectOne('http://localhost:4730/books').flush([
        {
          title: 'Die Kunst des klaren Denkens'
        }
      ]);
    });
  });
});
