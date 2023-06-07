const bookListNav = document.querySelector('bookList');
const addBookNav = document.querySelector('addBook');
const contactUsNav = document.querySelector('contact');
const arrayBtn = [bookListNav, addBookNav, contactUsNav];

const menuOption = document.querySelector('#bookListNav');
const addBookPage = document.querySelector('#addBookNav');
const contactUs = document.querySelector('#contactNav');
const arrayPage = [menuOption, addBookPage, contactUs];
// Switch Options
function displaySwitch(optionBtn) {
  arrayPage.forEach((part, optionPart) => {
    if (optionPart === optionBtn) {
      part.classList.replace('showHide', 'add-book');
      arrayBtn[optionPart].classList.add('active', 'list-books');
    } else {
      part.classList.replace('showHide', 'list-books');
      arrayBtn[optionPart].classList.remove('active', 'add-book');
    }
  });
}

arrayBtn.forEach((element, option) => {
  element.addEventListener('click', () => {
    displaySwitch(option);
  });
});

displaySwitch(0);
