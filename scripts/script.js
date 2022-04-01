const popupEditProfile = document.querySelector('#edit_profile');
const editButton = document.querySelector('.profile__edit-button');
const formElement = document.querySelector('.popup__edit-button');
const nameInput = document.querySelector('#name');
const infoInput = document.querySelector('#info');
const imageName = document.querySelector('#image-name');
const imageLink = document.querySelector('#image-link');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__text');
const closeEdit = popupEditProfile.querySelector('.popup__exit');
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
const popupLargerImage = document.querySelector('#larger_image');
const closeLargerImage = popupLargerImage.querySelector('.popup__exit');
const popupAddImage = document.querySelector('#add_image');
const addButton = document.querySelector('.profile__add-button');
const closeAddImage = popupAddImage.querySelector('.popup__exit');
const addForm = popupAddImage.querySelector('.popup__add-button');
const template = document.querySelector('.template');
const elements = initialCards.reverse().map(createCard);
const popups = document.querySelectorAll('.popup');

function openPopup (popup) {
  popup.classList.add('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  const errorMessages = popup.querySelectorAll('.popup__item-error');
  errorMessages.forEach((errorElement) => {
    errorElement.classList.remove('popup__item-error_visible');
  });
  const errorBorder = popup.querySelectorAll('.popup__item');
  errorBorder.forEach((border) => {
    border.classList.remove('popup__item_type_error');
  });
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = infoInput.value;
    closePopup(popupEditProfile);
}

function createCard(item) {
  const element = template.content.firstElementChild.cloneNode(true);
  const largerImage = element.querySelector('.grid__photo');
  largerImage.src = item.link;
  element.querySelector('.grid__text').textContent = item.name;
  largerImage.setAttribute('alt', item.name);

  largerImage.addEventListener('click', function () {
    popupLargerImage.querySelector('.popup-larger__caption').textContent = item.name;
    popupLargerImage.querySelector('.popup-larger__photo').src = item.link;
    popupLargerImage.querySelector('.popup-larger__photo').setAttribute('alt', item.name);
    openPopup(popupLargerImage);
  });

  const deleteItem = element.querySelector('.grid__delete-item');
  deleteItem.addEventListener('click', deleteImage);

  const like = element.querySelector('.grid__heart');
  like.addEventListener('click', likeToggle);
  return element;
}

function renderCard(element) {
  cardContainer.prepend(element);
}

function deleteImage(event) {
  const item = event.currentTarget.closest('.grid__item');
  item.remove();
} 

function likeToggle(event) {
  event.currentTarget.classList.toggle('grid__heart_activ');
}

function addImage(event) {
  event.preventDefault();
  const addImage = {link: event.currentTarget.querySelector('#image-link').value, 
      name: event.currentTarget.querySelector('#image-name').value};
  createCard(addImage);
  renderCard(createCard(addImage));
  addForm.reset();
  closePopup(popupAddImage);
}

closeEdit.addEventListener('click', function() {
  closePopup(popupEditProfile)
});

formElement.addEventListener('submit', formSubmitHandler);

elements.forEach(renderCard);

editButton.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  infoInput.value = profileInfo.textContent;
  openPopup(popupEditProfile);
});

closeLargerImage.addEventListener('click', function() {
  closePopup(popupLargerImage);
});

addButton.addEventListener('click', function() {
  imageName.value = "";
  imageLink.value = "";
  openPopup(popupAddImage);
});
  
closeAddImage.addEventListener('click', function() {
  closePopup(popupAddImage);
});

addForm.addEventListener('submit', addImage);

popups.forEach((popup) => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  });
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    }
  });
});