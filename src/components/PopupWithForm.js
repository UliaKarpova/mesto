import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, apiCallback) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__item');
        this._apiCallback = apiCallback;
        this._submit = this._form.querySelector('.popup__submit');
    }
    
    _getInputValues() {
        const inputValues = {};
        this._inputList.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }

    _submitHandler = () => {
        const obj = this._getInputValues();
        this._apiCallback(obj)
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', this._submitHandler);
    }

    close() {
        super.close();
        this._form.reset();
    }

    preloader() {
        this._submit.textContent = "Сохранение...";
    }

    offPreloader(text) {
        this._submit.textContent = text;
    }
}