import './index.css'; 
import Api from '../components/Api';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {Section} from '../components/Section.js';
import {nameInput, infoInput, settings, editButton, profileForm, addButton, addForm, avatarChangeForm, avatarChangeButton} from '../utils/indexConst.js';
import { CardUser } from '../components/CardUser';
import { PopupWithSubmit } from '../components/PopupWithSubmit';

const api = new Api({
  url: 'https://nomoreparties.co/v1/cohort-41/',
  headers: {
    authorization: 'd60f88da-0c33-4cb7-a701-de2dcdca59ad',
    "content-Type": "application/json",
  }
});

const popupAvatarChange = new PopupWithForm('#change-avatar', handleAvararChangeFormSubmit, api.sendNewAvatar);
popupAvatarChange.setEventListeners();
avatarChangeButton.addEventListener('click', () => {
    popupAvatarChange.offPreloader("Сохранить");
    popupAvatarChange.open();
});

const popupPredelete = new PopupWithSubmit("#delete-image", api);
popupPredelete.setEventListeners();

const popupProfileForm = new PopupWithForm('#edit_profile', handleProfileFormSubmit, api.sendNewProfileInfo);
popupProfileForm.setEventListeners();
editButton.addEventListener('click', function() {
  getValues(userInfoProfile.getUserInfo());
  profileValid.resetValidation();
  getValues(userInfoProfile.getUserInfo());
  popupProfileForm.offPreloader("Сохранить");
  popupProfileForm.open();
});

const popupAddImageForm = new PopupWithForm('#add_image', addCard, api.addNewCard);
popupAddImageForm.setEventListeners();
addButton.addEventListener('click', function() {
  addImageValid.resetValidation();
  popupAddImageForm.offPreloader("Создать");
  popupAddImageForm.open();
});

const popupWithImage = new PopupWithImage('.popup-larger');
popupWithImage.setEventListeners();

const userInfoProfile = new UserInfo({nameSelector: '.profile__name', aboutSelector: '.profile__text'});

const profileValid = new FormValidator(settings, profileForm);
profileValid.enableValidation();

const avatarChangeValid = new FormValidator(settings, avatarChangeForm);
avatarChangeValid.enableValidation();

const addImageValid = new FormValidator(settings, addForm);
addImageValid.enableValidation();

const section = new Section(addCard, '.grid', api);
section.addPhotoList();

const userCard = (...arg) => new CardUser(...arg);
const card = (...arg) => new Card(...arg);

const items = api.getInfo();
items.then((data) => {
  const profileAvatar = document.querySelector('.profile__avatar');
  profileAvatar.src = data.avatar;
  userInfoProfile.setUserInfo(data);
  }).catch((err) => console.log(err));

function deleteImageOpen(item, element) {
  popupPredelete.open();
  popupPredelete.deleteImage(item, element);
 }

function handleAvararChangeFormSubmit(item) {
  const avatar = document.querySelector('.profile__avatar');
  avatar.src = item.avatar;
  avatarChangeValid.resetValidation();
  popupAvatarChange.close();
}

function handleProfileFormSubmit(item) {
  userInfoProfile.setUserInfo(item);
  popupProfileForm.close();
}

function openPopupWithImage(item) {
  popupWithImage.open(item);
}

function getValues(item) {
  nameInput.value = item.name;
  infoInput.value = item.about;
}

function createNewCard(item) {
  if (item.owner._id === "5b345a580783f2b29460f04f") {
    const userCard2 = userCard(item, '.template', openPopupWithImage, deleteImageOpen, api);
    return userCard2.createCard();
  } else {
    const card2 = card(item, '.template', openPopupWithImage, api);
    return card2.createCard();
  }
};

function addCard(item) {
  const element = createNewCard(item);
  section.addItem(element);
  popupAddImageForm.close();
}