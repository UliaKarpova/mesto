import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {Section} from '../components/Section.js';
import {nameInput, infoInput, settings, editButton, profileForm, imageName, imageLink, initialCards, addButton, addForm} from '../utils/indexConst.js';

export const popupProfileForm = new PopupWithForm('#edit_profile', handleProfileFormSubmit);
export const popupWithImage = new PopupWithImage('.popup-larger');

const popupAddForm = new PopupWithForm('#add_image', addImage);
const userInfoProfile = new UserInfo({firstSelector: '.profile__name', secondSelector: '.profile__text'});
const profileValid = new FormValidator(settings, profileForm);
profileValid.enableValidation();
const addImageValid = new FormValidator(settings, addForm);
addImageValid.enableValidation();
const section = new Section({ items: initialCards, 
  renderer: addCard},
  '.grid');
section.rendererItems();

editButton.addEventListener('click', function() {
  nameInput.value = userInfoProfile.getUserInfo().name;
  infoInput.value = userInfoProfile.getUserInfo().info;
  profileValid.resetValidation();
  popupProfileForm.open();
});

addButton.addEventListener('click', function() {
  imageName.value = "";
  imageLink.value = "";
  addImageValid.resetValidation();
  popupAddForm.open();
});

function addCard(item) {
  const card = new Card(item, '.template');
  const element = card.createCard(item);
  section.addItem(element);
}
  
function addImage() {
  const imageItem = {link: imageLink.value, 
  name: imageName.value};
  addCard(imageItem);
  popupAddForm.close();
}
  
function handleProfileFormSubmit(item) {
  userInfoProfile.setUserInfo(item);
  popupProfileForm.close();
}
