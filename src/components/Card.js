export class Card {
    constructor(item, templateSelector, callback, api) {
        this._templateSelector = templateSelector;
        this._item = item;
        this._name = item.name;
        this._link = item.link;
        this._likes = item.likes;
        this._callback = callback;
        this._api = api;
    }

    _getCard() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.grid__item').cloneNode(true);
        cardElement.querySelector('.grid__delete-item').remove();
        return cardElement;
    }

    createCard() {
        this._element = this._getCard();
        this._cardImage = this._element.querySelector('.grid__photo');
        this._cardImage.src = this._link;
        this._element.querySelector('.grid__text').textContent = this._name;
        this._cardImage.setAttribute('alt', this._name);
        this._likeButton = this._element.querySelector('.grid__heart');
        this._likesNumber = this._element.querySelector('.grid__likes-number');
        this._isUserLiked();
        if (this._userLiked) {
            this._likeButton.classList.add('grid__heart_activ');
        }    
        this._likesNumber.textContent = this._likes.length;
        this._setEventListeners();
        return this._element;
    }
    
    _setEventListeners() {
        this._cardImage.addEventListener('click', () => {
          this._callback({name: this._name, link: this._link});
        });
        this._likeButton.addEventListener('click', () => {
            this._likeToggle();
        })
        return this._element;
    }

    _isUserLiked() {
        this._userLiked = this._item.likes.some(function(like) {
            return like._id === "5b345a580783f2b29460f04f"});
    }

    _likeToggle() {
        if (this._userLiked) {
            this._api.deleteLike(this._item)
            .then((res) => {
                this._likeButton.classList.remove('grid__heart_activ');
                this._likesNumber.textContent = res.likes.length;
                this._userLiked = !this._userLiked;
            }).catch((err) => console.log(err))    
        } else {   
            this._api.addLike(this._item)
            .then((res) => {
                this._likeButton.classList.add('grid__heart_activ');
                this._likesNumber.textContent = res.likes.length;
                this._userLiked = !this._userLiked;
            }).catch((err) => console.log(err))
        }
    }
}