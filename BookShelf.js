import Book from "./Book.js";

export default class BookShelf {
    name;
    owner;
    dateModified;
    books;

    constructor(_name, _owner, _dateModified) {
        this.name = _name;
        this.owner = _owner;
        this.dateModified = _dateModified;
        this.books = [];
    }
    addBook(book) {
        if(book instanceof Book) {
            this.books.push(book)
        };
    };

    updateBook(id, data) {
        // cách 1
        // for(let book of this.books) {
        //     if(book.id === id) {
        //         book.update(data);
        //         break;
        //     }
        // }

        // cách 2
        // find() của array: nếu tìm được 1 phần tử thỏa mãn => return phần tử đó. Ngược lại return null phần tủ đó
        let book = this.books.find(function(item) {
            return item.id === id;
        });
        if (book != null) {
            book.update(data);
        }
    };

    deleteBook(id) {
        // c2: findIndex() của array: nếu tìm được phần tử thỏa mãn => index >= 0. Ngược lại => -1
        let bookIndex = this.books.findIndex(item => item.id === id);
        if (bookIndex > -1) {
            this.books.splice(bookIndex, 1);
        }
    };
    showBooks() {
       console.log(this.books);
    };

    findBooks(name) {
        // c2: filter() của array: Trả về 1 mảng mới gồm những phần tử thỏa mãn điều kiện
        return this.books.filter(item => item.name === name);
    };
};