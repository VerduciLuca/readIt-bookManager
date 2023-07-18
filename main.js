document.addEventListener("DOMContentLoaded", function() {


let manager;

DBService.getAllBooks().then((books) => {
    manager = new Manager(books);
    render(manager.booksArray);
});
})

function render(booksArray) {
    let booksDiv = document.getElementById("books-div");
    booksDiv.innerHTML = "";

    for (let i = 0; i < booksArray.length; i++) {
        const book = booksArray[i];

    const card = document.createElement('div')
    card.classList.add('card')

    const title = document.createElement('strong')
    const titleNode = document.createTextNode(book.title)

    title.appendChild(titleNode)
    card.appendChild(title)

    const author = document.createElement('span')
    const authorNode = document.createTextNode (book.author)

    author.appendChild(authorNode)
    card.appendChild(author)

    const yop = document.createElement('span')
    const yopNode = document.createTextNode(book.yop)

    yop.appendChild(yopNode)
    card.appendChild(yop)


    booksDiv.appendChild(card)


    }
}

render()

