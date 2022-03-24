export class Popup {
    constructor(popup) {
        this._popup = document.querySelector(popup);
        this._popupCloseButton = this._popoup.querySelector('.popup__close');
    }

    // Открытие попапа
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    //Закрытие попапа
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    // Функция закрытия при нажатии кнопки ESC
    _handleEscClose(evt) {
        if (evt.key == 'Escape') {
            this.close();
        }
    }

    //Функция закрытия по оверлэю
    _handleOverlayClose(evt) {
        if(evt.target.classList.contains('popup')) {
            this.close();
        }
    }

    
    //Добавляем слушатель событий
    setEventListeners() {
        this._popupCloseButton.addEventListener('click', this.close());
        this._popup.addEventListener('click', this._handleOverlayClose);
    }
}