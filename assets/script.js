  // get book collection from localStorage, or initialize an empty array
  let books = JSON.parse(localStorage.getItem("books")) || [];

  // Display all books 
  function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    books.forEach(function(book) {
      const removeBtn = document.createElement("button");
      const tr = document.createElement("tr");
       tr.innerHTML = `<td> ${book.title} </td>
                       <td>  ${book.author} </td> 
                       `

      removeBtn.textContent = "Remove";
      removeBtn.classList.add("button");
      removeBtn.onclick = function() {
        removeBook(book);
      };

      tr.appendChild(removeBtn);
      bookList.appendChild(tr);
    });
  }


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

  // Initial display of books
  displayBooks();