import {Card} from './Card.js';
import {openPopup, closePopup} from './openPopup_closePopup.js';
import {FormValidator} from './FormValidator.js';

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_visible'
}
const popupEditProfile = document.querySelector('#edit_profile');
const editButton = document.querySelector('.profile__edit-button');
const profileForm = document.querySelector('.popup__edit-button');
const nameInput = document.querySelector('#name');
const infoInput = document.querySelector('#info');
const imageName = document.querySelector('#image-name');
const imageLink = document.querySelector('#image-link');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__text');
const initialCards = [
  {
    name: 'Обское море',
    link: 'https://images.unsplash.com/photo-1595933868307-5a7083dfb921?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  },
  {
    name: 'Горный Алтай',
    link: 'https://images.unsplash.com/photo-1577033226943-58e28a0d65d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Эльбрус',
    link: 'https://images.unsplash.com/photo-1626518139514-65676cf25bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Мыс Острый',
    link: 'https://images.unsplash.com/photo-1636363880339-dc1c020d3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fCVEMCVCRiVEMSU4MCVEMCVCOCVEMSU4MCVEMCVCRSVEMCVCNCVEMCVCMCUyMCVEMSU4MCVEMCVCRSVEMSU4MSVEMSU4MSVEMCVCOCVEMCVCOHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Карелия',
    link: 'https://images.unsplash.com/photo-1630763741321-16e7bff61e2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Красная Поляна',
    link: 'https://images.unsplash.com/photo-1603787292746-92adce40cbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  }
];

const cardContainer = document.querySelector('.grid');
const popupAddImage = document.querySelector('#add_image');
const addButton = document.querySelector('.profile__add-button');
const addForm = popupAddImage.querySelector('.popup__add-button');
const elements = initialCards.reverse().map((item) => {
  const card = new Card(item, '.template');
  const element = card.createCard();
  return element;
});

const addImageButton = addForm.querySelector('.popup__submit');
const popups = document.querySelectorAll('.popup');

function deleteErrors(popup) {
  const errorMessages = popup.querySelectorAll('.popup__item-error');
  errorMessages.forEach((errorElement) => {
    errorElement.classList.remove('popup__item-error_visible');
  });
  const errorBorder = popup.querySelectorAll('.popup__item');
  errorBorder.forEach((border) => {
    border.classList.remove('popup__item_type_error');
  });
}

const profileValid = new FormValidator(settings, profileForm);
profileValid.enableValidation();
const addImageValid = new FormValidator(settings, addForm);
addImageValid.enableValidation();

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = infoInput.value;
    closePopup(popupEditProfile);
}

function renderCard(element) {
  cardContainer.prepend(element);
}

popups.forEach((popup) => {
  const exitButton = popup.querySelector('.popup__exit');
  exitButton.addEventListener('click', function(){
    closePopup(popup);
  })
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    }
  });
});

function addImage(event) {
  event.preventDefault();
  const addImage = {link: imageLink.value, 
      name: imageName.value};
  const addCard = new Card(addImage, '.template');
  const addItem = addCard.createCard();
  renderCard(addItem);
  addForm.reset();
  addImageButton.disabled = true;
  addImageButton.classList.add('popup__submit_disabled');
  closePopup(popupAddImage);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);

elements.forEach((element) => {
  renderCard(element)
});

editButton.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  infoInput.value = profileInfo.textContent;
  deleteErrors(popupEditProfile);
  openPopup(popupEditProfile);
});

addButton.addEventListener('click', function() {
  imageName.value = "";
  imageLink.value = "";
  deleteErrors(popupAddImage);
  openPopup(popupAddImage);
});
  
addForm.addEventListener('submit', addImage);



