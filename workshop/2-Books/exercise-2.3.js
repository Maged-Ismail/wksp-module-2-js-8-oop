// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2


// Exercise 2.3
// We need a method in our BookList to make adding books possible.
//  - create an add method to add books to the library.
//      - when you add a book, it should increase the read, or unread count.
//  - use the add method to add in a few books.
//      - you can call new Book without declaring it as variable.
//      - e.g. homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));

// Once you have added a few books, console.log(homeLibrary) to see if all is well.

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
        this.boohUnread =0;
        this.book = [];
        this.lastBook = this.book[current-1] || 'none';
        this.currentBook = this.book[current] || 'none';
        this.upNext = this.book[current+1] || 'none';
    }

    add = (newBook) => {
        this.book.push(newBook);
        this.boohUnread +=1;
    }
}

let homeLibrary = new BookList();
homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
console.log(homeLibrary);

// BookList {
//     add: [Function: add],
//     booksread: 0,
//     boohUnread: 1,
//     book: [
//       Book {
//         title: 'The Shining',
//         genre: 'Horror',
//         author: 'Stephen King',
//         read: 'Not Yet',
//         startReadDate: 'None',
//         endReadDate: 'None'
//       }
//     ],
//     lastBook: 'none',
//     currentBook: 'none',
//     upNext: 'none'
//   }


