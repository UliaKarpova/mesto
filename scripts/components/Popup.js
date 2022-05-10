export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    };

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
        this.setEventListeners();
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
    }
    
    setEventListeners() {
        const exitButton = this._popup.querySelector('.popup__exit');
            exitButton.addEventListener('click', () => {
              this.close();
            });
            this._popup.addEventListener('mousedown', (evt) => {
              if (evt.target === evt.currentTarget) {
                this.close();
              }
            });
    }
}