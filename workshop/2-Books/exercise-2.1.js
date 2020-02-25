// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//      - title, genre, author, read, startReadDate, endReadDate
// Declare the books as book1, book2, book3, book4, book5
//
// Remember that it isn't necessary to pass arguments for all of the parameters.
// if you haven't read the book, there should not be a startReadDate or endReadDate
//
// Console.log them to verify that all is working.

class Book {
    constructor (title, genre, author, read, start,end) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read || 'Not Yet';
        this.startReadDate = start || "None";
        this. endReadDate = end || 'None';
    }
}

let book1 = new Book('Da Vinci Code', 'Novel', 'Dan Brown', 'Yes', '20/05','30/05');
let book2 = new Book('fjnfrb', 'eeee', 'bfjherb');
let book3 = new Book('kfgrjgr','fgetg','efgegtet', 'yes', '99/44', '33/44');
let book4 = new Book('dfgeg', 'efgerg', 'ergerge');
let book5 = new Book('grid', 'dom', 'see');

console.log(book1, book2, book3, book4, book5);

// Book {
//     title: 'Da Vinci Code',
//     genre: 'Novel',
//     author: 'Dan Brown',
//     read: 'Yes',
//     startReadDate: '20/05',
//     endReadDate: '30/05'
//   } Book {
//     title: 'fjnfrb',
//     genre: 'eeee',
//     author: 'bfjherb',
//     read: 'Not Yet',
//     startReadDate: 'None',
//     endReadDate: 'None'
//   } Book {
//     title: 'kfgrjgr',
//     genre: 'fgetg',
//     author: 'efgegtet',
//     read: 'yes',
//     startReadDate: '99/44',
//     endReadDate: '33/44'
//   } Book {
//     title: 'dfgeg',
//     genre: 'efgerg',
//     author: 'ergerge',
//     read: 'Not Yet',
//     startReadDate: 'None',
//     endReadDate: 'None'
//   } Book {
//     title: 'grid',
//     genre: 'dom',
//     author: 'see',
//     read: 'Not Yet',
//     startReadDate: 'None',
//     endReadDate: 'None'
//   }