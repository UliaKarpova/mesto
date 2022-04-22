import {openPopup} from './openPopup_closePopup.js';
import {popupLargerImage, caption, photo} from './cardConst.js';

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
            caption.textContent = this._name;
            photo.src = this._link;
            photo.setAttribute('alt', this._name);
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

  _deleteImage() {
      this._element.remove();
      this._element = null;
  } 
      
  _likeToggle(event) {
      event.currentTarget.classList.toggle('grid__heart_activ');
    }
}