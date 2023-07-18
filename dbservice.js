class DBService{

    //GET
    static getAllBooks(){
        const url = 'https://64b512c3f3dbab5a95c6a4a9.mockapi.io/books';
        return fetch(url)
        .then(resp => resp.json())
        .then(result => this.convertToBookArray(result))
        .catch(error => console.log(error.message));
    }

    //DELETE
    static removeBook(id){
        console.log('delete', id);
        const deleteUrl = 'https://64b512c3f3dbab5a95c6a4a9.mockapi.io/books' + id;
        console.log(deleteUrl);
        return fetch(deleteUrl, {method: 'delete'}).then(resp => resp.json());
    }

    //PUT
    static updateBook(todo){

    }

    //UPDATE
    static saveBook(todo){

    }



    static convertToBookArray(genericArray){

        const tempArray = [];

        for (const obj of genericArray) {
            const newBook = new Book(obj.title, obj.author, new Date(obj.yop), obj.id,obj.genre)
            tempArray.push(newBook);
        }

        return tempArray;

    }


}