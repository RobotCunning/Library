const myLibrary = [];
//let title = document.getElementById("bookTitle"); 
//let author = document.getElementById("bookAuthor"); 
//let pages = document.getElementById("bookPages");
//let read = document.getElementById("bookRead");
//let submit = document.getElementById("bookSubmit");
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
        
        let bookCard = document.createElement('div');
        bookCard.className = "bookCard"
        document.querySelector('.bookDisplay').appendChild(bookCard);

        document.querySelector('.bookCard').append(JSON.stringify(book['title'] + ", " + book['author'] + ", " + book['pages'] + ", " + book['read'])) 
        
        // The plan is to have someone enter the book, then update the library when they add the book. then have the library automatically create the div and place the details
        // in the div to display then on the "book shelf". the current issue is that when we are adding a book, it is firstly reprinting the first item on the array and secondly
        // printing into the next div that is being created.
        //things to do:
        //1) find a way to print only the most recently added book from array, maybe using pop or a new array etc
        //2) find a way to add to a new div which the new book data gets added to and without creating excess empty divs, look into queryselectorall, seems interesting
        console.log(book);
        //add books to "cards" on the page
    }
}

function addItems(){
    myLibrary.forEach(item => {
        let p = document.createElement('p');
        p.innerText = item;
        document.querySelector('#bookShelf').append(JSON.stringify(p))  
    });
}



