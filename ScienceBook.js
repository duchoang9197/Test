import Book from "./Book.js";

export default class ScienceBook extends Book {
    major;

    constructor(_name, _price, _publishedDate, _major) {
        super(name, price, publishedDate);
        this.major = _major;
    };
};
