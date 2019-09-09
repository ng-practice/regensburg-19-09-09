import { emptyBook } from './book-empty';

describe('When an empty book is created', () => {
  it('has no title', () => {
    const book = emptyBook();
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
