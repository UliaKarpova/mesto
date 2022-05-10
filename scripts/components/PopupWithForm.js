import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._inputList = this._popup.querySelectorAll('.popup__item');
        this._inputValues = {};
        this._submitCallback = submitCallback;
    }
    _getInputValues() {
        this._inputList.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }

    _submitHandler = () => {
        this._submitCallback(this._getInputValues());
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', this._submitHandler);
    }

    open() {
        super.open();
    }

    close() {
        this._popup.removeEventListener('submit', this._submitHandler);
        super.close();
    }
}