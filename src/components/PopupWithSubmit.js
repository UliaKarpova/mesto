import {Popup} from './Popup.js';

export class PopupWithSubmit extends Popup {
    constructor(popupSelector, api) {
        super(popupSelector);
        this._submit = this._popup.querySelector('.popup__submit');
        this._api = api; 
    }
    
    setEventListeners() {
        super.setEventListeners();
    }

    deleteImage(item, element) {
        this._popup.querySelector('.popup__submit').addEventListener('click', () => {
            const del = this._api.deleteImage(item);
            del.then(() => {
                element.remove();
                element = null;
                }).catch((err) => console.log(err));
            this.close();
        })
    } 
}