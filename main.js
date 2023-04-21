const card = document.querySelector('.book-card');
const button = document.querySelector('button');

let myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 295,
        read: 'Have read?',
    },
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        pages: 223,
        read: 'have read?',
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
        let newP = document.createElement('p');
        let newPText = document.createTextNode(`Title ${book.title}`);

        newP.appendChild(newPText);

        card.appendChild(newDiv);
        card.appendChild(newP);
    });
}

button.addEventListener('click', () => {
    displayBook();
});
