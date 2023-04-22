const card = document.querySelector('.grid');
const button = document.querySelector('button');


let myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 295,
        read: 'have not read',
    },
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        pages: 223,
        read: 'have not read',
    },
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    console.log(myLibrary);
}

function displayBook() {
    myLibrary.forEach((book) => {
        let newDiv = document.createElement('div');
        let newPara = document.createElement('p');

        let newParaText = document.createTextNode(`Book: ${book.title}`);
        let newParaText2 = document.createTextNode(`Author: ${book.author}`);
        let newParaText3 = document.createTextNode(`Pages: ${book.pages}`);
        let newParaText4 = document.createTextNode(`read? ${book.read}`);

        newDiv.className = 'book-card';

        newPara.appendChild(newParaText);
        newPara.appendChild(document.createElement('br'));
        newPara.appendChild(newParaText2);
        newPara.appendChild(document.createElement('br'));
        newPara.appendChild(newParaText3);
        newPara.appendChild(document.createElement('br'));
        newPara.appendChild(newParaText4);

        newDiv.appendChild(newPara);

        card.appendChild(newDiv);
    });
}

button.addEventListener('click', () => {
    displayBook();
});
