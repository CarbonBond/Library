const bookContainer = document.querySelector('.bookContainer')
const bookAdd = document.querySelector('.addToggle');
const add = document.querySelector('#myForm')

let myLibrary = [];

function Book(title, author, pages, read, id){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = id

    this.info = () => {
        return `${title} by ${author}, ${pages} pages, Status:${read}`
    }
}

displayLibrary();


function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayLibrary() {
    myBooks = document.querySelectorAll('.book')
    myBooks.forEach((item)=> {
        item.remove();
    })

    for(let i = 0; i<myLibrary.length; i++){
        myLibrary[i].id = i;
        drawBook(myLibrary[i])
    }
    console.table(myLibrary)
}

bookAdd.addEventListener('click', () => {
    add.setAttribute('style',`display: block`)
})


bookAddButton = document.querySelector('.addButton');
bookAddButton.addEventListener('click', () => {
    newBook = getNewBookInfo();
    add.setAttribute('style', `display:none`);
    addBookToLibrary(newBook);
    displayLibrary();

})
bookCancelButton = document.querySelector('.cancelButton');
bookCancelButton.addEventListener('click', () => {
    add.setAttribute('style', `display:none`)
})

function getNewBookInfo() {
    bTitle = document.querySelector("#bTilte").value;
    bAuthor = document.querySelector("#bAuthor").value;
    bPages = document.querySelector("#bPages").value;
    bRead = document.getElementById("bRead");
    bReadValue = bRead.options[bRead.selectedIndex].text;
    id = myLibrary.length;
    newbook = new Book(bTitle, bAuthor, bPages, bReadValue, id)
    return newbook;
}

function drawBook(book) {
    const newBook = document.createElement('div')
    newBook.classList.add('book');
    newBook.setAttribute('id', `${book.id}`)
    bookContainer.insertBefore(newBook, bookAdd);

    const bookLayout = document.createElement('div');
    bookLayout.classList.add('bookLayout');

    newBook.appendChild(bookLayout);
    const bookTitle = document.createElement('div');
    bookTitle.classList.add('bookTitle');
    bookTitle.textContent = book.title;
    bookLayout.appendChild(bookTitle);

    const bookAuth = document.createElement('div');
    bookAuth.classList.add('bookAuth');
    bookAuth.textContent = book.author;
    bookLayout.appendChild(bookAuth);

    const bookReadArea = document.createElement('div');
    bookReadArea.classList.add('bookRead');
    bookReadArea.textContent = book.read
    bookLayout.appendChild(bookReadArea);

    const bookFooter = document.createElement('div');
    bookFooter.classList.add('bookFooter');
    bookLayout.appendChild(bookFooter);

    const bookPage = document.createElement('div');
    bookPage.classList.add('bookPage');
    bookPage.textContent = `Pages:${book.pages}`;
    bookFooter.appendChild(bookPage);

    const removeButton = document.createElement('div');
    removeButton.classList.add('removeButton');
    removeButton.textContent = "X";
    bookFooter.appendChild(removeButton);

    removeButton.addEventListener('click', (e)=>{
        delBook = e.target.parentElement.parentElement.parentElement;
        myLibrary.splice(delBook.id.slice(-1), 1)
        displayLibrary();
    })
    
}

