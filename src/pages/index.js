import './index.css'; 

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {Section} from '../components/Section.js';
import {nameInput, infoInput, settings, editButton, profileForm, initialCards, addButton, addForm} from '../utils/indexConst.js';

const popupProfileForm = new PopupWithForm('#edit_profile', handleProfileFormSubmit);
popupProfileForm.setEventListeners();
const popupAddForm = new PopupWithForm('#add_image', addImage);
popupAddForm.setEventListeners();
const popupWithImage = new PopupWithImage('.popup-larger');
popupWithImage.setEventListeners();
const userInfoProfile = new UserInfo({nameSelector: '.profile__name', infoSelector: '.profile__text'});
const profileValid = new FormValidator(settings, profileForm);
profileValid.enableValidation();
const addImageValid = new FormValidator(settings, addForm);
addImageValid.enableValidation();
const section = new Section({ items: initialCards, 
  renderer: addCard},
  '.grid');
section.rendererItems();

function createNewCard(item) {
  const card = new Card(item, '.template', openPopupWithImage);
  return card.createCard();
};

function openPopupWithImage(item) {
  popupWithImage.open(item);
}

function addCard(item) {
  const element = createNewCard(item);
  section.addItem(element);
}

function addImage(item) {
  addCard(item);
  popupAddForm.close();
}

editButton.addEventListener('click', function() {
  const userInfo = userInfoProfile.getUserInfo();
  nameInput.value = userInfo.name;
  infoInput.value = userInfo.info;
  profileValid.resetValidation();
  popupProfileForm.open();
});

addButton.addEventListener('click', function() {
  addImageValid.resetValidation();
  popupAddForm.open();
});

function handleProfileFormSubmit(item) {
  userInfoProfile.setUserInfo(item);
  popupProfileForm.close();
}