// get book collection from localStorage, or initialize an empty array
let books = JSON.parse(localStorage.getItem('books')) || [];

// Display all books
function displayBooks() {
  const bookList = document.getElementById('bookList');

  // Clean the content
  bookList.innerHTML = '';

  books.forEach((book, index) => {
    const removeBtn = document.createElement('button');
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
    `;

    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('removeBtn');
    removeBtn.onclick = () => {
    // eslint-disable-next-line no-use-before-define
      removeBook(book);
    };

    const tdAction = document.createElement('td');
    tdAction.appendChild(removeBtn);
    tr.appendChild(tdAction);
    bookList.appendChild(tr);
  });
}

// Add a new book
// eslint-disable-next-line no-unused-vars
function addBook() {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title && author) {
    const book = { title, author };
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks();

    // Clear input fields
    titleInput.value = '';
    authorInput.value = '';
  }
}

// Remove a book from the collection
function removeBook(bookToRemove) {
  books = books.filter((book) => book !== bookToRemove);

  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
}

// Initial display of books
displayBooks();