// get book collection from localStorage, or initialize an empty array
let books = JSON.parse(localStorage.getItem('books')) || [];

// Display all books
function displayBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';
  books.forEach((book) => {
    const removeBtn = document.createElement('button');
    const tr = document.createElement('tr');
    tr.innerHTML = `<td> ${book.title} </td> <td>  ${book.author} </td>`;
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('button');
    removeBtn.onclick = function () {
      removeBook(book);
    };

    tr.appendChild(removeBtn);
    bookList.appendChild(tr);
  });
}

// Add a new book
// eslint-disable-line
function addBook() {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title && author) {
// eslint-disable-line
    const book = { title, author };
// eslint-disable-line
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks();

// Clear input fields
    titleInput.value = '';
    authorInput.value = '';
  }
}

// Remove a book from the collection
// eslint-disable-line
function removeBook(bookToRemove) {
// eslint-disable-line no-console 
  books = books.filter(function(book) { 
    return book !== bookToRemove; });

  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
}

// Initial display of books
displayBooks();
