function addNewBook() {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value;
  const author = authorInput.value;

  if (title === '' || author === '') {
    alert('Please enter a title and author.');
    return;
  }

  const newBook = { title, author };
  books.push(newBook);
  saveBooksToStorage(books);
  renderBooks();

  // Clear input fields
  titleInput.value = '';
  authorInput.value = '';
}
