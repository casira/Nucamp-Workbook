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
    } else {
      console.log(`Sorry, '${title}' is not in this library.`);
    }
  },
  getAvailableBooks() {
    let bookList = this.books.filter((book: Book) => book.available);
    console.log(bookList.map((book: Book) => book.title).join("\n"));
  },
  //Learned how to parse JSON data 'as' different types! Plus try/catch error handling.
  receiveBooks(newBooks: string) {
    try {
      let order = JSON.parse(newBooks) as Book[];
      order.forEach((book: Book) => library.addBook(book));
    } catch (error) {
      console.error(`Invalid JSON receipt for book order. ERROR: ${error}`);
    }
  },
};
//
export const newBooks = `[
    {"title": "Feminist, Queer, Crip", "author": "Alison Kafer"},
    {"title": "A Woman Is No Man", "author": "Etaf Rum"},
    {"title": "Dear Edward", "author": "Ann Napolitano"},
    {"title": "You Got Anything Strong?", "author": "Gabrielle Union"}
]`;
