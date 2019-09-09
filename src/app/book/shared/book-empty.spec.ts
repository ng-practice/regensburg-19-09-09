import { Book } from './book';
import { emptyBook } from './book-empty';

describe('When an empty book is created', () => {
  let book: Book;

  beforeEach(() => {
    book = emptyBook();
  });

  it('has no title', () => {
    expect(book.title).toBe('');
  });

  it.each`
    property      | default
    ${'author'}   | ${''}
    ${'numPages'} | ${0}
  `('has no $property', row => {
    const book = emptyBook();
    expect(book[row.property]).toBe(row.default);
  });
});
