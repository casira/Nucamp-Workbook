export class Book {
  /* Original JS version below
    title: string;
    author: string;
    available: boolean;
    constructor(title: string, author: string, available = true) {
        this.title = title;
        this.author = author;
        this.available = available;
    }
   Learning and practising TS version below */
  constructor(public title: string, public author: string, public available = true) {}
}
export const library = {
  books: [],
  addBook(donation: Book) {
    this.books.push(donation);
  },
  checkOutBook(title: string) {
    let theBook = this.books.find((book: Book) => book.title === title);
    if (theBook && theBook.available) {
      theBook.available = false;
    }
  },
  getAvailableBooks() {
    let bookList = this.books.filter((book: Book) => book.available);
    console.log(bookList.map((book: Book) => book.title).join("\n"));
  },
};
