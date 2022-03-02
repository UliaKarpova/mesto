const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit-button');
openPopup.addEventListener('click', function() {
    popup.classList.add('popup__opened')
});

let formElement = document.querySelector('.popup__edit-button');
let nameInput = document.querySelector('#name');
let infoInput = document.querySelector('#info');
let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__text');

function formSubmitHandler(evt) {
    evt.preventDefault();
    let name = nameInput.value;
    let info = infoInput.value;
    profileName.textContent = name;
    profileInfo.textContent = info;
    popup.classList.remove('popup__opened');
}
formElement.addEventListener('submit', formSubmitHandler);

const closePopup = document.querySelector('.popup__exit');
closePopup.addEventListener('click', function() {
    popup.classList.remove('popup__opened');
    nameInput.value = profileName.textContent;
    infoInput.value = profileInfo.textContent;
});

