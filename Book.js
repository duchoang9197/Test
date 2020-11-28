export default class Book {
    id;
    name;
    price;
    publishedDate;

    constructor(_name, _price, _publishedDate) {
        this.name = _name;
        this.price = _price;
        this.publishedDate = _publishedDate;
        this.id = uuid.v4();
    };
    update(data) {
        for(let key in data) {
            if(this[key] != undefined && key != "id") {
                this[key] = data[key];
            }
        }
    };
};
