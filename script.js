let myLibrary = [];
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

Book.prototype.readButtonToggle = function() {
    this.read = !this.read;
}

function readToggle(index) {
    myLibrary[index].readButtonToggle();
}

function AddToLibrary(){
    let title = document.getElementById("bookTitle"); 
    let author = document.getElementById("bookAuthor"); 
    let pages = document.getElementById("bookPages");
    let read = false;
    let book = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(book);

    DisplayBooks();
}

function DisplayBooks(){
        let bookShelf =  document.querySelector('.bookDisplay');
        bookShelf.innerHTML= ""
        for (i=0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookCard = document.createElement("div");
        bookCard.id = "bookCard"+i; // a counter to make each individual div selectable for the read function
        bookCard.className = "bookCard";
        bookCard.innerHTML =`
        <div class="bookHeader"><h3>${book.title}</h3><h4> Written by <br> ${book.author}</h4></div>
        <div class="bookBody"><h5>${book.pages} pages</h5></div>
        <div class="readButtonContainer">
        <button id="readButton${i}" class="readButton" onClick="ReadBook(${i})">Read</button>
        <button class="removeButton" onClick="RemoveBook(${i})">Remove</button></div>`;
        bookShelf.appendChild(bookCard);
        console.log(book.read);
        if (book.read == true){
            document.querySelector("#bookCard"+i).classList.toggle('bookCardRead');
            document.querySelector("#readButton"+i).classList.toggle('readButtonClicked');
        }
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
    if(myLibrary[index].read == true){
        document.querySelector("#bookCard"+index).classList.toggle('bookCardRead');
        document.querySelector("#readButton"+index).classList.toggle('readButtonClicked');
        readToggle(index);
    } else {
        document.querySelector("#bookCard"+index).classList.toggle('bookCardRead');
        document.querySelector("#readButton"+index).classList.toggle('readButtonClicked');
        readToggle(index);
    }
  console.log(myLibrary[index].read); //just so I can test if the read function works (it does)
}
function RemoveBook(index) {
    myLibrary.splice(index, 1);
    DisplayBooks();
}