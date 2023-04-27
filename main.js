const card = document.querySelector(".grid");
const button = document.querySelector("button");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayBook() {
    card.textContent = "";
    myLibrary.forEach((book) => {
        let newDiv = document.createElement("div");
        let newPara = document.createElement("p");
        let newButton = document.createElement("button");
        newPara.style.color = "white";

        let newParaText = document.createTextNode(`Title: ${book.title}`);
        let newParaText2 = document.createTextNode(`Author: ${book.author}`);
        let newParaText3 = document.createTextNode(`Pages: ${book.pages}`);
        let newParaText4 = document.createTextNode(`read? ${book.read}`);

        let buttonText = document.createTextNode("remove");

        newDiv.className = "book-card";
        newButton.className = "card-button";

        newPara.appendChild(newParaText);
        newPara.appendChild(document.createElement("br"));
        newPara.appendChild(newParaText2);
        newPara.appendChild(document.createElement("br"));
        newPara.appendChild(newParaText3);
        newPara.appendChild(document.createElement("br"));
        newPara.appendChild(newParaText4);
        newButton.appendChild(buttonText);

        newDiv.appendChild(newPara);

        newDiv.appendChild(newButton);

        card.appendChild(newDiv);

        newButton.querySelector(".card-button");
        newButton.addEventListener("click", (index) => {
            myLibrary.pop(index);

            displayBook();
        });
    });
}

function clearInput() {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;

    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);

    displayBook();
}

function validateTitle() {
    let bookTitle = document.querySelector("#title").value;
    if (bookTitle === "") {
        document.querySelector(".input1").style.outline = "1px solid red";
        newDiv.style.display = "none";
    } else {
        document.querySelector(".input1").style.outline =
            "1px solid rgb(87, 87, 87)";
    }
}

function validateAuthor() {
    let bookAuthor = document.querySelector("#author").value;
    if (bookAuthor === "") {
        document.querySelector(".input2").style.outline = "1px solid red";
        newDiv.style.display = "none";
    } else {
        document.querySelector(".input2").style.outline =
            "1px solid rgb(87, 87, 87)";
    }
}

function validatePages() {
    let bookPages = document.querySelector("#pages").value;
    if (bookPages === "") {
        document.querySelector(".input3").style.outline = "1px solid red";
        newDiv.style.display = "none";
    } else {
        document.querySelector(".input3").style.outline =
            "1px solid rgb(87, 87, 87)";
    }
}

function validateRead() {
    let bookRead = document.querySelector("#read").value;
    if (bookRead === "") {
        document.querySelector(".input4").style.outline = "1px solid red";
        newDiv.style.display = "none";
    } else {
        document.querySelector(".input4").style.outline =
            "1px solid rgb(87, 87, 87)";
    }
}

button.addEventListener("click", (event) => {
    event.preventDefault();
    validateTitle();
    validateAuthor();
    validatePages();
    validateRead();
    addBookToLibrary();
    clearInput();
});
