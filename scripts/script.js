const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');

let formElement = document.querySelector('.popup__edit-button');
let nameInput = document.querySelector('#name');
let infoInput = document.querySelector('#info');
let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__text');
nameInput.value = profileName.textContent;
infoInput.value = profileInfo.textContent;

editButton.addEventListener('click', function() {
    nameInput.value = profileName.textContent;
    infoInput.value = profileInfo.textContent;
    popup.classList.add('popup_opened')
});

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = infoInput.value;
    popup.classList.remove('popup_opened');
}
formElement.addEventListener('submit', formSubmitHandler);

const closePopup = document.querySelector('.popup__exit');
closePopup.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
});

