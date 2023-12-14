const myLibrary = [];
//let title = document.getElementById("bookTitle"); 
//let author = document.getElementById("bookAuthor"); 
//let pages = document.getElementById("bookPages");
//let read = document.getElementById("bookRead");
//let submit = document.getElementById("bookSubmit");
const update = new Book();
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
    myLibrary.push(book); //may not be correct but its basically what i want to do, add the book to 
}

function DisplayBooks(){
    for(i=0; i<myLibrary.length; i++){
        let book = myLibrary[i];
        console.log(book);
        //add books to "cards" on the page
    }
}


//aGameOfThrones.info();


