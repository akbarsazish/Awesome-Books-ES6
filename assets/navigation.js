// Get the navigation elements
const bookListNav = document.getElementById('bookListNav');
const addBookNav = document.getElementById('addBookNav');
const contactNav = document.getElementById('contactNav');

// Get the content sections
const bookListSection = document.querySelector('.list-books');
const addBookSection = document.querySelector('.add-book');
const contactSection = document.querySelector('.card');

// Function to display the book list section
function showBookListSection() {
  bookListSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
}

// Function to display the add book section
function showAddBookSection() {
  bookListSection.style.display = 'none';
  addBookSection.style.display = 'block';
  contactSection.style.display = 'none';
}

// Function to display the contact information section
function showContactSection() {
  bookListSection.style.display = 'none';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'block';
}

// Add event listeners to navigation links
bookListNav.addEventListener('click', showBookListSection);
addBookNav.addEventListener('click', showAddBookSection);
contactNav.addEventListener('click', showContactSection);

// By default, display the book list section on page load
showBookListSection();
