const addBookForm = document.getElementById('add-book-form');
const searchInput = document.getElementById('search-input');
const bookList = document.getElementById('book-list');

let library = [];

addBookForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const genre = document.getElementById('genre').value;

    if (title && author && pages && genre) {
        const newBook = { title, author, pages, genre };
        library.push(newBook);
        displayBooks(library);
        addBookForm.reset();
    } else {
        alert('Please fill in all the required fields.');
    }
});

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = library.filter(book => book.title.toLowerCase().includes(searchTerm));
    displayBooks(filteredBooks);
});

function displayBooks(books) {
    bookList.innerHTML = '';

    if (books.length === 0) {
        const noBooksMessage = document.createElement('p');
        noBooksMessage.textContent = 'No books found.';
        bookList.appendChild(noBooksMessage);
    } else {
        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <p>Genre: ${book.genre}</p>
            `;
            bookList.appendChild(bookElement);
        });
    }
}
