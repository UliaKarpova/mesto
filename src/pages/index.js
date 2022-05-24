import './index.css'; 
import Api from '../components/Api';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {Section} from '../components/Section.js';
import {nameInput, infoInput, settings, editButton, profileForm, addButton, addForm, avatarChangeForm, avatarChangeButton, deleteSubmitButton} from '../utils/indexConst.js';
import { PopupWithSubmit } from '../components/PopupWithSubmit';

const api = new Api({
  url: 'https://nomoreparties.co/v1/cohort-41/',
  headers: {
    authorization: 'd60f88da-0c33-4cb7-a701-de2dcdca59ad',
    "content-Type": "application/json",
  }
});

let userId;

Promise.all([
  api.getInfo(),
  api.getPhotos()
])
.then((values)=>{ 
  const info = values[0];
  const photos = values[1];
  userInfoProfile.setAvatar(info.avatar);
  userInfoProfile.setUserInfo(info);
  userId = info._id;
  photos.forEach((photo) => {
  photo.userId = info._id;
  });
  section.rendererItems(photos);
}).catch((err) => console.log(err));

const card = (...arg) => new Card(...arg);
const section = new Section(createNewCard, ".grid");

const popupAvatarChange = new PopupWithForm('#change-avatar', newAvatarApi);
popupAvatarChange.setEventListeners();
avatarChangeButton.addEventListener('click', () => {
    popupAvatarChange.offPreloader("Сохранить");
    popupAvatarChange.open();
});

const popupProfileForm = new PopupWithForm('#edit_profile', newProfileInfoApi);
popupProfileForm.setEventListeners();
editButton.addEventListener('click', function() {
  getValues(userInfoProfile.getUserInfo());
  profileValid.resetValidation();
  getValues(userInfoProfile.getUserInfo());
  popupProfileForm.offPreloader("Сохранить");
  popupProfileForm.open();
});

const popupAddImageForm = new PopupWithForm('#add_image', addImage);
popupAddImageForm.setEventListeners();
addButton.addEventListener('click', function() {
  addImageValid.resetValidation();
  popupAddImageForm.offPreloader("Создать");
  popupAddImageForm.open();
});

const popupPredelete = new PopupWithSubmit("#delete-image");
popupPredelete.setEventListeners();

const popupWithImage = new PopupWithImage('.popup-larger');
popupWithImage.setEventListeners();

const userInfoProfile = new UserInfo({nameSelector: '.profile__name', aboutSelector: '.profile__text', avatarSelector: '.profile__avatar'});

const profileValid = new FormValidator(settings, profileForm);
profileValid.enableValidation();

const avatarChangeValid = new FormValidator(settings, avatarChangeForm);
avatarChangeValid.enableValidation();

const addImageValid = new FormValidator(settings, addForm);
addImageValid.enableValidation();

function addImage(item) {
    api.addNewCard(item)
    .then((value) => {
    const newCard = value;
    newCard.userId = userId;
    section.addItem(createNewCard(newCard));
    popupAddImageForm.close();
  }).catch((err) => console.log(err));
}

function deleteImageOpen(item, element) { 
  popupPredelete.setSubmitAction(() => {
    popupPredelete.preloader();
    api.deleteImage(item, element)
    .then(() => {
     element.remove();
     element = null;
     popupPredelete.close();
    }).catch((err) => console.log(err))
  });
  popupPredelete.offPreloader("Да");
  popupPredelete.open();
  popupPredelete.submit();
}

function createNewCard(item) {
  const card2 = card(item, '.template', openPopupWithImage, deleteImageOpen);
  card2.deleteLikeApi(() => {
    api.deleteLike(item)
    .then((res) => {
      card2.toggleLike(res);
    }).catch((err) => console.log(err))
  });
  card2.addLikeApi(() => {
    api.addLike(item)
    .then((res) => {
      card2.toggleLike(res);
    }).catch((err) => console.log(err))
  });
  return card2.createCard();
}

function newAvatarApi(item) {
  api.sendNewAvatar(item)
  .then((res) => {
  userInfoProfile.setAvatar(res.avatar);
  avatarChangeValid.resetValidation();
  popupAvatarChange.close();
}).catch((err) => console.log(err));
}

function newProfileInfoApi(item) {
  api.sendNewProfileInfo(item)
  .then((res) => {
    userInfoProfile.setUserInfo(res);
    popupProfileForm.close();
  }).catch((err) => console.log(err));
}

function openPopupWithImage(item) {
  popupWithImage.open(item);
}

function getValues(item) {
  nameInput.value = item.name;
  infoInput.value = item.about;
}
