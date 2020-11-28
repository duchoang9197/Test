// Bài 1
// Các cuốn sách được chia thành chương và mục, module là tập hợp các từ (hoặc code, tùy từng trường hợp) giống như các chương của 1 cuốn sách, các lập trình viên chia chương trình thành các module.
// Những lợi ích sử dụng module:
// Dễ bảo trì: Theo định nghĩa, một module tự đóng gói. Một module được thiết kế tốt nhắm tới việc làm giảm sự phụ thuộc của các phần trong codebase càng nhiều càng tốt để nó có thể phát triển một cách độc lập. Cập nhật một module dễ dàng hơn nhiều khi module đó liên kết lỏng lẻo với các phần code khác.
// Phân chia không gian tên: Trong Javascript, các biến bên ngoài phạm vi của một hàm cấp cao nhất là toàn cục (nghĩa là mọi người đều có thể truy cập đến nó). Vì vậy, việc bị "ô nhiễm không gian tên", khi các đoạn code hoàn toàn không liên quan đến nhau chia sẻ chung các biến toàn cục, là thường thấy.
// Tính tái sử dụng: Hãy thành thật: chúng ta đều sao chép code mình viết trước đó đến một dự án mới lúc này hay lúc khác. Ví dụ, hãy tưởng tượng bạn sao chép một vài hàm tiện ích bạn viết ở dự án trước cho dự án hiện tại của bạn.
// Import: cho phép nhập các function từ các module khác
// Export: khai báo các variables hoặc funcion cho phép module khác truy cập và sử dụng. Có 2 loại Export:
// Named Export: Sử dụng để xuất nhiều thứ từ 1 module bằng cách thêm keyword export vào khai báo của chúng
// Default Export: Trong Javascript ES6 chỉ cho phép xuất một mặc định cho mỗi file. Default Export có thể cho một function, class hoặc một object.

// Bài 2
// class Book {
//     id;
//     name;
//     price;
//     publishedDate;

//     constructor(_id, _name, _price, _publishedDate) {
//         this.id = _id;
//         this.name = _name;
//         this.price = _price;
//         this.publishedDate = _publishedDate;
//     };
//     update(data) {
        
//     };
// };

// class ComicBook extends Book {
//     funny;
//     pageNumber;

//     constructor(_id, _name, _price, _publishedDate, _funny, _pageNumber) {
//         super(id, name, price, publishedDate);
//         this.funny = _funny;
//         this.pageNumber = _pageNumber;
//     };
// };

// class TextBook extends Book {
//     subject;
//     grade;

//     constructor(_id, _name, _price, _publishedDate, _subject, _grade) {
//         super(id, name, price, publishedDate);
//         this.subject = _subject;
//         this.grade = _grade;
//     };
// };


// class ScienceBook extends Book {
//     major;

//     constructor(_id, _name, _price, _publishedDate, _major) {
//         super(id, name, price, publishedDate);
//         this.major = _major;
//     };
// };


// class BookShelf {
//     name;
//     owner;
//     dateModified;

//     constructor(_name, _owner, _dateModified) {
//         this.name = _name;
//         this.owner = _owner;
//         this.dateModified = _dateModified;
//     }
//     addBook(book) {

//     };
//     updateBook(id, data) {

//     };
//     deleteBook(id) {

//     };
//     showBooks() {
       
//     };
//     findBooks(name) {

//     };
// };

// Chữa bài 2

// class Book {
//     id;
//     name;
//     price;
//     publishedDate;

//     constructor(_name, _price, _publishedDate) {
//         this.name = _name;
//         this.price = _price;
//         this.publishedDate = _publishedDate;
//         this.id = uuid.v4();
//     };
//     update(data) {
//         for(let key in data) {
//             if(this[key] != undefined && key != "id") {
//                 this[key] = data[key];
//             }
//         }
//     };
// };

// class ComicBook extends Book {
//     funny;
//     pageNumber;

//     constructor( _name, _price, _publishedDate, _funny, _pageNumber) {
//         super(name, price, publishedDate);
//         this.funny = _funny;
//         this.pageNumber = _pageNumber;
//     };
// };

// class TextBook extends Book {
//     subject;
//     grade;

//     constructor(_name, _price, _publishedDate, _subject, _grade) {
//         super(name, price, publishedDate);
//         this.subject = _subject;
//         this.grade = _grade;
//     };
// };


// class ScienceBook extends Book {
//     major;

//     constructor(_name, _price, _publishedDate, _major) {
//         super(name, price, publishedDate);
//         this.major = _major;
//     };
// };


// class BookShelf {
//     name;
//     owner;
//     dateModified;
//     books;

//     constructor(_name, _owner, _dateModified) {
//         this.name = _name;
//         this.owner = _owner;
//         this.dateModified = _dateModified;
//         this.books = [];
//     }
//     addBook(book) {
//         if(book instanceof Book) {
//             this.books.push(book)
//         };
//     };

//     updateBook(id, data) {
//         // cách 1
//         // for(let book of this.books) {
//         //     if(book.id === id) {
//         //         book.update(data);
//         //         break;
//         //     }
//         // }

//         // cách 2
//         // find() của array: nếu tìm được 1 phần tử thỏa mãn => return phần tử đó. Ngược lại return null phần tủ đó
//         let book = this.books.find(function(item) {
//             return item.id === id;
//         });
//         if (book != null) {
//             book.update(data);
//         }
//     };

//     deleteBook(id) {
//         // c2: findIndex() của array: nếu tìm được phần tử thỏa mãn => index >= 0. Ngược lại => -1
//         let bookIndex = this.books.findIndex(item => item.id === id);
//         if (bookIndex > -1) {
//             this.books.splice(bookIndex, 1);
//         }
//     };
//     showBooks() {
//        console.log(this.books);
//     };

//     findBooks(name) {
//         // c2: filter() của array: Trả về 1 mảng mới gồm những phần tử thỏa mãn điều kiện
//         return this.books.filter(item => item.name === name);
//     };
// };

import Book from "./Book.js";
import ComicBook from "./ComicBook.js";
import TextBook from "./TextBook.js";
import ScienceBook from "./ScienceBook.js";
import BookShelf from "./BookShelf.js";