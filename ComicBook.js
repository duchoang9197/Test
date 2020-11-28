import Book from "./Book.js";

export default class ComicBook extends Book {
    funny;
    pageNumber;

    constructor( _name, _price, _publishedDate, _funny, _pageNumber) {
        super(name, price, publishedDate);
        this.funny = _funny;
        this.pageNumber = _pageNumber;
    };
};