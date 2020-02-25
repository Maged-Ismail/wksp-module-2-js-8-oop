// Exercise 2.2
// ------------
// Create a BookList class that has the following properties:
//      - booksread (0 to start)
//      - bookUnread (0 start)
//      - books (empty array)
//      - reference to last book read (null for now)
//      - reference to book currently reading (null for now)
//      - reference to book that is upNext (null for now)
//
// Then intantiate it once as 'homeLibrary'

// Console.log(homeLibrary) to verify that all is working.

class BookList {
    constructor (books, current){
        this.booksread =0;
        this.boohUnread =0;
        this.book = [];
        this.lastBook = this.book[current-1] || 'none';
        this.currentBook = this.book[current] || 'none';
        this.upNext = this.book[current+1] || 'none';
    }
}
let homeLibrary = new BookList();
console.log(homeLibrary);


// BookList {
//     booksread: 0,
//     boohUnread: 0,
//     book: [],
//     lastBook: 'none',
//     currentBook: 'none',
//     upNext: 'none'
//   }