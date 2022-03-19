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

function renderCards(item) {
  const template = document.querySelector('.template').content.firstElementChild.cloneNode(true);
  template.querySelector('.grid__photo').src = item.link;
  template.querySelector('.grid__text').textContent = item.name;
  template.querySelector('.grid__photo').setAttribute('alt', item.name);

  const largerImage = template.querySelector('.grid__photo');
  largerImage.addEventListener('click', function () {
    popupLargerImage.querySelector('.popup-larger__caption').textContent = item.name;
    popupLargerImage.querySelector('.popup-larger__photo').src = item.link;
    popupLargerImage.querySelector('.popup-larger__photo').setAttribute('alt', item.name);
    togglePopup(popupLargerImage);
  });

  const deleteItem = template.querySelector('.grid__delete-item');
  deleteItem.addEventListener('click', deleteImage);

  const like = template.querySelector('.grid__heart');
  like.addEventListener('click', likeToggle);
 
  cardContainer.append(template);
}
  
function deleteImage(event) {
  const template = event.currentTarget.closest('.grid__item');
  template.remove();
} 

function likeToggle(event) {
  event.currentTarget.classList.toggle('grid__heart_activ');
}

const popupLargerImage = document.querySelector('#larger_image');
const closeLargerImage = popupLargerImage.querySelector('.popup__exit');
closeLargerImage.addEventListener('click', function() {
  togglePopup(popupLargerImage);
  popupLargerImage.querySelector('.popup-larger__caption').textContent = "";
  popupLargerImage.querySelector('.popup-larger__photo').src = "";
  popupLargerImage.querySelector('.popup-larger__photo').setAttribute('alt', "");
});

const popupAddImage = document.querySelector('#add_image');
const addButton = document.querySelector('.profile__add-button');
const closeAddImage = popupAddImage.querySelector('.popup__exit');
const addForm = popupAddImage.querySelector('.popup__add-button');

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
  const template = document.querySelector('.template').content.firstElementChild.cloneNode(true);
  template.querySelector('.grid__photo').src = event.currentTarget.querySelector('#image-link').value;
  template.querySelector('.grid__text').textContent = event.currentTarget.querySelector('#image-name').value;
  template.querySelector('.grid__photo').setAttribute('alt', event.currentTarget.querySelector('#image-name').value);
  
  const deleteItem = template.querySelector('.grid__delete-item');
  deleteItem.addEventListener('click', deleteImage);

  const like = template.querySelector('.grid__heart');
  like.addEventListener('click', likeToggle);

  const largerImage = template.querySelector('.grid__photo');
  largerImage.addEventListener('click', function () {
    popupLargerImage.querySelector('.popup-larger__caption').textContent = template.querySelector('.grid__text').textContent;
    popupLargerImage.querySelector('.popup-larger__photo').src = template.querySelector('.grid__photo').src;
    popupLargerImage.querySelector('.popup-larger__photo').setAttribute('alt', template.querySelector('.grid__text').textContent);
    togglePopup(popupLargerImage);
  });

  cardContainer.prepend(template);
  event.currentTarget.reset();
  togglePopup(popupAddImage);
}

initialCards.map(renderCards);
  