export class Card {
    constructor(item, templateSelector, callback, imageDeleteCallback, likeDeleteCallback, likeAddCallback) {
        this._templateSelector = templateSelector;
        this._item = item;
        this._userId = item.userId;
        this._likes = item.likes;
        this._callback = callback;
        this._imageDeleteCallback = imageDeleteCallback;
        this._likeDeleteCallback = likeDeleteCallback;
        this._likeAddCallback = likeAddCallback;
    }

    _getCard() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.grid__item').cloneNode(true);
        return cardElement;
    }

    createCard() {
        this._element = this._getCard();
        this._cardImage = this._element.querySelector('.grid__photo');
        this._cardImage.src = this._item.link;
        this._element.querySelector('.grid__text').textContent = this._item.name;
        this._cardImage.setAttribute('alt', this._item.name);
        this._likeButton = this._element.querySelector('.grid__heart');
        this._likesNumber = this._element.querySelector('.grid__likes-number');
        this._isLiked();
        if (this._userLiked) {
            this._likeButton.classList.add('grid__heart_activ');
        }
        this._likesNumber.textContent = this._likes.length;
        if (!this._isUserOwner()) {
            this._element.querySelector('.grid__delete-item').remove();
        }
        this._setEventListeners();
        return this._element;
    }
    
    _setEventListeners() {
        this._cardImage.addEventListener('click', () => {
          this._callback({name: this._item.name, link: this._item.link});
        });
        this._likeButton.addEventListener('click', () => {
            if (this._userLiked) {
                this._likeDeleteCallback(this._item)
                .then((res) => {
                    this._deleteLike(res);
                }).catch((err) => console.log(err))
            } else {
               this._likeAddCallback(this._item)
               .then((res) => {
                this._addLike(res);
                }).catch((err) => console.log(err))
            }
        })
        if (this._isUserOwner()) {
        this._element.querySelector('.grid__delete-item').addEventListener('click', () => {
            this._imageDeleteCallback(this._item, this._element);
        });
        }
        return this._element;
    }

    _isUserOwner() {
        if (this._item.owner._id === this._userId) {
            return true;
        }
    }

    _isLiked() {
        this._userLiked = this._item.likes.some((like) => {
            return like._id === this._userId;
    })
    return this._userLiked;
}

    _deleteLike(res) {
        this._likeButton.classList.remove('grid__heart_activ');
        this._likesNumber.textContent = res.likes.length;
        this._userLiked = !this._userLiked;
    }
    
    _addLike(res) {   
        this._likeButton.classList.add('grid__heart_activ');
        this._likesNumber.textContent = res.likes.length;
        this._userLiked = !this._userLiked;
    }
}