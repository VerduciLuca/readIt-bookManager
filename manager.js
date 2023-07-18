class Manager {
    constructor(booksArray = []) {
        this.booksArray = booksArray;
    }

    addBook(book) {
        this.booksArray.push(book);
    }

    removeBook(index) {
        this.booksArray.splice(index, 1);
    }

    orderByTitle() {
        this.booksArray.sort((book1, book2) => book1.title.localeCompare(book2.title));
    }

    orderByYop() {
        this.booksArray.sort((book1, book2) => book1.yop.localeCompare(book2.yop));
    }


}