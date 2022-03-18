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

const popupAddImage = document.querySelector('#add_image');
const addButton = document.querySelector('.profile__add-button');
const closeAddImage = popupAddImage.querySelector('.popup__exit');

addButton.addEventListener('click', function() {
  togglePopup(popupAddImage);

});

closeAddImage.addEventListener('click', function() {
  togglePopup(popupAddImage);
});

const popupLargerImage = document.querySelector('#larger_image');
const largeImage = document.querySelector('.grid__photo');
const closeLargerImage = popupLargerImage.querySelector('.popup__exit');

largeImage.addEventListener('click', function() {
  togglePopup(popupLargerImage);
});

closeLargerImage.addEventListener('click', function() {
  togglePopup(popupLargerImage);
});


/*

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

  const cardsContainer = document.querySelector('.grid');
  console.log(cardsContainer);
  const template = document.querySelector('.template').content.firstElementChild.cloneNode(true);
  console.log(template);
  const cardForm = document.querySelector('.profile__edit-button');
  cardForm.addEventListener('click', function(){
    
  });
  function renderCards(item) {
    template.querySelector('.grid__photo').src = item.link;
    template.querySelector('.grid__text').textContent = item.name;
    cardsContainer.append(template);

    }
    for (let i = 0; i < cards.length; i++) {
    cardsContainer.append(cards[i]);
    }
    return ;
    
  }

  initialCards.map(renderCards).join('');
  function addObject() {

  }
  */