import {Popup} from "./Popup.js";
import {caption, photo} from '../utils/cardConst.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
     open(evt) {
        this._caption = evt.target.alt;
        caption.textContent = this._caption;
        photo.src = evt.target.src;
        photo.setAttribute('alt', this._caption);
        super.open();
    };
    close() {
        super.close();
    }
    setEventListeners() {
        super.setEventListeners();
   }
   _handleEscClose(evt) {
       super._handleEscClose(evt);
   }
}