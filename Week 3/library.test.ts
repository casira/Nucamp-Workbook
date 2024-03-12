import { library, Book, newBooks } from "./library";
//
const book1 = new Book("American Ending", "Mary Kay Zuravleff");
const book2 = new Book("Mother Land", "Leah Franqui");
const book3 = new Book("The Count of Monte Cristo", "Alexandre Dumas");
//Should add the 3 books to the library
test("addBook", () => {
  expect(library.addBook(book1)).toBe(undefined);
  expect(library.addBook(book2)).toBe(undefined);
  expect(library.addBook(book3)).toBe(undefined);
  expect(library.books).toEqual([book1, book2, book3]);
});
//Should mark book3 as unavailable
test("checkOutBook", () => {
  expect(library.checkOutBook("The Count of Monte Cristo")).toBe(undefined);
  expect(library.books[2].available).toEqual(false);
  expect(library.books[0].available).toEqual(true);
  expect(library.books[1].available).toEqual(true);
});
//
test("getAvailableBooks", () => {
  console.log = jest.fn();
  expect(library.getAvailableBooks()).toBe(undefined);
  expect(console.log).toHaveBeenCalledWith(`American Ending\nMother Land`);
});
//
test("receiveBooks", () => {
  expect(library.receiveBooks(newBooks)).toBe(undefined);
  expect(library.books).toEqual([
    { author: "Mary Kay Zuravleff", available: true, title: "American Ending" },
    { author: "Leah Franqui", available: true, title: "Mother Land" },
    { author: "Alexandre Dumas", available: false, title: "The Count of Monte Cristo" },
    { author: "Alison Kafer", title: "Feminist, Queer, Crip" },
    { author: "Etaf Rum", title: "A Woman Is No Man" },
    { author: "Ann Napolitano", title: "Dear Edward" },
    { author: "Gabrielle Union", title: "You Got Anything Strong?" },
  ]);
});
//
test("Error Handling", () => {
  console.error = jest.fn();
  expect(library.receiveBooks(`newBoos`)).toBe(undefined);
  expect(console.error).toHaveBeenCalledWith(
    `Invalid JSON receipt for book order. ERROR: SyntaxError: Unexpected token e in JSON at position 1`
  );
});
