class Book {
    constructor(cover,title, author, yop, genre, id) {
        this.cover= cover
        this.title = title;
        this.author = author;
        this.yop = new Date(yop).getFullYear();
        this.genre = genre;
        this.id = id;

    }
}
