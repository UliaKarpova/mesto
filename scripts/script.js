const popupEditProfile = document.querySelector('#edit_profile');
const editButton = document.querySelector('.profile__edit-button');
let formElement = document.querySelector('.popup__edit-button');
let nameInput = document.querySelector('#name');
let infoInput = document.querySelector('#info');
let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__text');
nameInput.value = profileName.textContent;
infoInput.value = profileInfo.textContent;

const togglePopup = function (popup) {
  popup.classList.toggle('popup_opened');
}

editButton.addEventListener('click', function() {
    nameInput.value = profileName.textContent;
    infoInput.value = profileInfo.textContent;
    togglePopup(popupEditProfile);
});

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = infoInput.value;
    togglePopup(popupEditProfile);
}
formElement.addEventListener('submit', formSubmitHandler);

const closeEdit = popupEditProfile.querySelector('.popup__exit');
closeEdit.addEventListener('click', function() {
  togglePopup(popupEditProfile);
});

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
 
const cardContainer = document.querySelector('.grid'); 
const addForm = document.querySelector('.popup__add-button');

function renderCards(item) {
  const template = document.querySelector('.template').content.firstElementChild.cloneNode(true);
  template.querySelector('.grid__photo').src = item.link;
  template.querySelector('.grid__text').textContent = item.name;
  const popupLargerImage = template.querySelector('.popup');
  popupLargerImage.querySelector('.popup-larger__caption').textContent = item.name;
  popupLargerImage.querySelector('.popup-larger__photo').src = item.link;
  console.log(popupLargerImage);
  template.querySelector('.grid__delete-item').addEventListener('click', deleteImage);
  const like = template.querySelector('.grid__heart');
  like.addEventListener('click', function() {
    like.classList.toggle('grid__heart_activ');
  });
  const largerImage = template.querySelector('.grid__photo');
  largerImage.addEventListener('click', function() {
    togglePopup(popupLargerImage);
  });
  cardContainer.append(template);
  }
  

  const popupAddImage = document.querySelector('#add_image');
  const addButton = document.querySelector('.profile__add-button');
  const closeAddImage = popupAddImage.querySelector('.popup__exit');
  
  addButton.addEventListener('click', function() {
    togglePopup(popupAddImage);
    });
  
  closeAddImage.addEventListener('click', function() {
    togglePopup(popupAddImage);
  });

  function deleteImage(event) {
    const template = event.currentTarget.closest('.grid__item');
    template.remove();
  } 
  
  
  
  addForm.addEventListener('submit', addImage);


function addImage(event) {
  event.preventDefault();
  const newImage = event.currentTarget.querySelector('#image-link').value;
  console.log(newImage);
  const newText = event.currentTarget.querySelector('#image-name').value;
  initialCards.unshift({name: newText, link: newImage});
  console.log(initialCards);
  event.currentTarget.reset();
  togglePopup(popupAddImage);
  cardContainer.innerHTML = '';
  initialCards.map(renderCards);
  console.log(cardContainer);
  }

  initialCards.map(renderCards);

  const closeLargerImage = popupLargerImage.querySelector('.popup__exit');

popupLargerImage.addEventListener('click', function() {
  togglePopup(popupLargerImage);
});

closeLargerImage.addEventListener('click', function() {
  togglePopup(popupLargerImage);
});
