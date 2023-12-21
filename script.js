let myLibrary = [];
const allBooks = [];
const form = document.getElementById("form");
form.addEventListener("submit", function(event) { 
    event.preventDefault(); // Prevents the form from submitting and the page from reloading 
  });

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        let info = this.title + ", " + this.author +", " +  this.pages +", " +  this.read
        return info;
    }
}

function AddToLibrary(){
    let title = document.getElementById("bookTitle"); 
    let author = document.getElementById("bookAuthor"); 
    let pages = document.getElementById("bookPages");
    let read = false;
    let book = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(book);
    allBooks.push(book); //this is to keep all books logged until I find a way to stop reprinting arrays from mylibrary
}

function DisplayBooks(){
        let bookShelf =  document.querySelector('.bookDisplay');
        bookShelf.innerHTML= ""
        for (i=0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookCard = document.createElement("div");
        bookCard.className = "bookCard"
        bookCard.innerHTML =`
        <div class="bookHeader"><h3>${book.title}</h3><h4> Written by <br> ${book.author}</h4></div>
        <div class="bookBody"><h5>${book.pages} pages</h5></div>
        <div class="readButtonContainer">
        <button class="readButton" onClick="ReadBook(${i})">Read</button>
        <button class="removeButton" onClick="RemoveBook(${i})">Remove</button></div>`;
        bookShelf.appendChild(bookCard);
        console.log(book.read);
        }
    }


function OpenForm(){
    document.getElementById("fieldset").style.display = "flex";
}

function CloseForm(){
    document.getElementById("fieldset").style.display = "none";
    document.getElementById("formButtonOpen").style.display = "block";
    DisplayBooks();
}


const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
formButtonOpen.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
formButtonClose.addEventListener("click", () => {
  dialog.close();
});

function ReadBook(index){
    document.querySelector(".bookCard").className='bookCardRead';
    document.querySelector(".readButton").className = 'readButtonClicked';
    document.querySelector(".readButtonClicked").innerHTML = "Book has been read";
    myLibrary[index].read = true;
    console.log(myLibrary[index].read);
}
function RemoveBook(index) {
    myLibrary.splice(index, 1);
    DisplayBooks();
}