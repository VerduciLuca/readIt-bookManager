


let manager;

DBService.getAllBooks()
    .then((books) => {
        manager = new Manager(books);
        render(manager.booksArray);
    })
    .catch((error) => {
        console.error(error);
    });

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

    const genre = document.createElement('span')
    const genreNode = document.createTextNode(book.genre)

    genre.appendChild(genreNode)
    card.appendChild(genre)

    const deleteBtn = document.createElement('button')
    const deleteNode = document.createTextNode('Delete')

    deleteBtn.appendChild(deleteNode)
    card.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', () => {
        DBService.removeBook(book.id).then(() => {
            manager.removeBook(i);
            render(manager.booksArray);
        });
    });

    booksDiv.appendChild(card)



    }
}


