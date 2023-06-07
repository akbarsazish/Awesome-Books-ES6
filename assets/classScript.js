class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    this.books.forEach((book) => {
      const removeBtn = document.createElement('button');
      const tr = document.createElement('tr');
      tr.innerHTML = `<td> ${book.title} </td> <td>  ${book.author} </td> `;
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('button');
      removeBtn.onclick = () => {
        this.removeBook(book);
      };
      tr.appendChild(removeBtn);
      bookList.appendChild(tr);
    });
  }

  addBook(title, author) {
    const book = { title, author };
    this.books.push(book);
    this.displayBooks();
    this.saveBooks();
  }

  removeBook(bookToRemove) {
    this.books = this.books.filter((book) => book !== bookToRemove);
    this.displayBooks();
    this.saveBooks();
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}