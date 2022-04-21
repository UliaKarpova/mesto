const popupLargerImage = document.querySelector('.popup-larger');
import {openPopup} from './openPopup_closePopup.js';

export class Card {
    constructor(item, templateSelector) {
        this._templateSelector = templateSelector;
        this._name = item.name;
        this._link = item.link;
    }

    _getCard() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.grid__item').cloneNode(true);
        return cardElement;
    }

    createCard() {
        this._element = this._getCard();
        this._setEventListeners();
        const cardImage = this._element.querySelector('.grid__photo');
        cardImage.src = this._link;
        this._element.querySelector('.grid__text').textContent = this._name;
        cardImage.setAttribute('alt', this._name);
        return this._element;
    }
    
    _setEventListeners() {
      this._element.querySelector('.grid__photo').addEventListener('click', () => {
            popupLargerImage.querySelector('.popup-larger__caption').textContent = this._name;
            popupLargerImage.querySelector('.popup-larger__photo').src = this._link;
            popupLargerImage.querySelector('.popup-larger__photo').setAttribute('alt', this._name);
            openPopup(popupLargerImage);
        });
   
      const deleteItem = this._element.querySelector('.grid__delete-item');
      deleteItem.addEventListener('click', (event) => {
          this._deleteImage(event);
      });
    
      const like = this._element.querySelector('.grid__heart');
      like.addEventListener('click', (event) => {
          this._likeToggle(event);
      });

      return this._element;
    }

  _deleteImage(event) {
      const item = event.currentTarget.closest('.grid__item');
      item.remove();
  } 
      
  _likeToggle(event) {
      event.currentTarget.classList.toggle('grid__heart_activ');
    }
}