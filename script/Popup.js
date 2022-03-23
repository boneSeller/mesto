export class Popup {
    constructor(popup) {
        this._popup = document.querySelector(popup);
        this._popupCloseButton = this._popoup.querySelector('.popup__close');
    }

    open() {
        this._popup.classList.add('popup_opened');

    }

    close() {
        this._popup.classList.remove('popup_opened');
    }

    _handleEscClose(evt) {
        if (evt.key == 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose(evt) {
        if(evt.target.classList.contains('popup')) {
            this.close();
        }
    }

    

    setEventListeners() {
        this._popupCloseButton.addEventListener('click', this.close());
        this._popup.addEventListener('click', this._handleOverlayClose);
    }
}