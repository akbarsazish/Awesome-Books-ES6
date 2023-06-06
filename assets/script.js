
// Add a new book
function addBook() {
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title && author) {
    const book = { title: title, author: author };
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    displayBooks();

    // Clear input fields
    titleInput.value = "";
    authorInput.value = "";
  }
}

// Remove a book from the collection
function removeBook(bookToRemove) {
  books = books.filter(function(book) {
    return book !== bookToRemove;
  });

  localStorage.setItem("books", JSON.stringify(books));
  displayBooks();
}
