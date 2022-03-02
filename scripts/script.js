const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit-button');
openPopup.addEventListener('click', function() {
    popup.classList.add('popup__opened')
});
const closePopup = document.querySelector('.popup__exit');
closePopup.addEventListener('click', function() {
    popup.classList.remove('popup__opened')
});