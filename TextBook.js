import Book from "./Book.js";

export default class TextBook extends Book {
    subject;
    grade;

    constructor(_name, _price, _publishedDate, _subject, _grade) {
        super(name, price, publishedDate);
        this.subject = _subject;
        this.grade = _grade;
    };
};