import { library, Book } from "./library";
//
const book1 = new Book("American Ending", "Mary Kay Zuravleff", true);
const book2 = new Book("Mother Land", "Leah Franqui", true);
const book3 = new Book("The Count of Monte Cristo", "Alexandre Dumas", true);
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
