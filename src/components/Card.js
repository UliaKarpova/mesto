export class Card {
    constructor(item, templateSelector, callback) {
        this._templateSelector = templateSelector;
        this._name = item.name;
        this._link = item.link;
        this._callback = callback;
    }

    _getCard() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.grid__item').cloneNode(true);
        return cardElement;
    }

    createCard() {
        this._element = this._getCard();
        this._cardImage = this._element.querySelector('.grid__photo');
        this._setEventListeners();
        this._cardImage.src = this._link;
        this._element.querySelector('.grid__text').textContent = this._name;
        this._cardImage.setAttribute('alt', this._name);
        return this._element;
    }
    
    _setEventListeners() {
        this._cardImage.addEventListener('click', (evt) => {
          this._callback(evt);
        });
        const deleteItem = this._element.querySelector('.grid__delete-item');
        deleteItem.addEventListener('click', (event) => {
          this._deleteImage(event);
        });
      
         this._like = this._element.querySelector('.grid__heart');
         this._like.addEventListener('click', (event) => {
            this._likeToggle(event);
        });
        return this._element;
    }

    _deleteImage() {
      this._element.remove();
      this._element = null;
    } 
      
    _likeToggle() {
        this._like.classList.toggle('grid__heart_activ');
    }
}