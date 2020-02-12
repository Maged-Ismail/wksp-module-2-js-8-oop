// From 2.3
// Copy over all of the code from 2.3...


// Exercise 2.4
// We need methods in our BookList start reading and finish reading books
//      - startReading accepts a title parameter. (The book should already be in your books array.
//          - set currentlyReading
//          - set the startReadDate in the book object to new Date(Date now());
//      - finishREading accepts a title parameter.
//          - set lastRead to title
//          - update the book's object accordingly.
//          - update the read and unread count accordingly.

// console.log(homeLibrary) when you're done adding, starting and finishing books.
// Make sure that your changes are reflected in the homeLibrary.
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

class BookList {
    constructor (books, current){
        this.booksread =0;
        this.bookUnread =0;
        this.book = [];
        this.lastBook = null ;
        this.currentBook = null ;
        this.upNext = null ;
    }

    add = (newBook) => {
        this.book.push(newBook);
        if (newBook.read) {
            this.read += 1;
        } else {
            this.unread += 1;
        }
    }
    startReading = (title) =>{
        this.currentBook = title;
        let book = this.book.find(book => book.title === title);
        book.startReadDate = new Date(Date.now());
    }
    finishReading = (title) =>{
        this.lastBook = title;
        let book = this.book.find(book => book.title === title); 
        book.endReadDate = new Date(Date.now());
        this.booksread += 1;
        this.bookUnread -= 1; 
    }
}

const homeLibrary = new BookList();
homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman'));
homeLibrary.add(new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke'));
homeLibrary.add(new Book('The Eire Affair', 'Fantasy', 'Jasper Fforde'));
homeLibrary.add(new Book('The Revisionists', 'Science-fiction', 'thomas Mullen'));

homeLibrary.startReading('The Shining');
homeLibrary.finishReading('American Gods');

console.log(homeLibrary);