import {Popup} from './Popup.js';

export class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._submit = this._popup.querySelector('.popup__submit');
    }
    
    setSubmitAction(submitAction) {
        this._callback = submitAction;
    }

   setEventListeners() {
        super.setEventListeners();
       
    }
    
    removeButton() {
       this._submit.disabled = true;
    }

    activateButton() {
        this._submit.disabled = false;
    }

    submit() {
        this._submit.addEventListener('click', this._callback);
    }
   
    close() {
        this._submit.removeEventListener('click', this._callback);
        super.close();
    }
    
    preloader() {
        this._submit.textContent = "Удаление...";
    }

    offPreloader(text) {
        this._submit.textContent = text;
    }
}