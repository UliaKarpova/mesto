import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageCaption = this._popup.querySelector('.popup-larger__caption');
        this._image = this._popup.querySelector('.popup-larger__photo');
    }

    open(item) {
        this._imageCaption.textContent = item.name;
        this._image.src = item.link;
        this._image.setAttribute('alt', item.name);
        super.open();
    };

    close() {
        super.close();
    }
    
    setEventListeners() {
        super.setEventListeners();
   }
}