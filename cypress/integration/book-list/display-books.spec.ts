describe('When the start pages is opened', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.get('[data-testid=book-item]').as('books');
  });

  context('Book creation', () => {
    const isbn = '12-45-78-10-1';

    it('adds a book to the list after creating it', () => {
      let count = 0;

      cy.get('@books').then(books => (count = books.length));
      cy.get('[data-testid=create-navigation-button]').click();
      cy.get('[formControlName=isbn]').type(isbn);
      cy.get('[formControlName=title]').type('Hi from cypress');
      cy.get('[formControlName=author]').type('Glen');
      cy.get('[data-testid=create-book-btn]').click();

      cy.get('@books').then(books => expect(books.length).to.eq(count + 1));
    });

    afterEach(() =>
      cy.request('DELETE', `http://localhost:4730/books/${isbn}`)
    );
  });

  it('shows the heading containing "Book Monkey"', () => {
    cy.get('[data-testid=page-heading]').contains('🐒');
  });
});
