import { Card } from "./Card";

export class CardUser extends Card {
    constructor(item, templateSelector, callback, imageDeleteCallback, api) {
        super(item, templateSelector, callback);
        this._imageDeleteCallback = imageDeleteCallback;
        this._api = api;
    }

    _getCard() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.grid__item').cloneNode(true);
        return cardElement;
    }
    
    _setEventListeners() {
        const deleteItem = this._element.querySelector('.grid__delete-item');
        deleteItem.addEventListener('click', () => {
            this._imageDeleteCallback(this._item, this._element);
        });
        super._setEventListeners();
        return this._element;
    }
}