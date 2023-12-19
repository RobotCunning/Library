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
    let read = document.getElementById("bookRead");
    let book = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(book);
    allBooks.push(book); //this is to keep all books logged until I find a way to stop reprinting arrays from mylibrary
}

function DisplayBooks(){
        myLibrary.forEach((n)=>{
        let bookCard = document.createElement('div');
        bookCard.className = "bookCard"
        document.querySelector('.bookDisplay').innerHTML +=`<div class="bookCard">${n['title'] + ", " + n['author'] + ", " + n['pages'] + ", " + n['read']}</div>`;    
        })
        myLibrary = [];
}

function AllBooks (){
    myLibrary = allBooks;
}

function OpenForm(){
    document.getElementById("fieldset").style.display = "flex";
   // document.getElementById("formButtonOpen").style.display = "none";//
    document.getElementById("formButtonClose").style.display = "block";
}

function CloseForm(){
    document.getElementById("fieldset").style.display = "none";
    document.getElementById("formButtonOpen").style.display = "block";
    document.getElementById("formButtonClose").style.display = "none";
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
