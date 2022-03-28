export class Popup {
    constructor(popup) {
        this._popup = popup;
        this._popupCloseButton = this._popup.querySelector('.popup__close');
    }

    // Открытие попапа
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', (e) => {this._handleEscClose(e)});
    }

    //Закрытие попапа
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown',(e) => {this._handleEscClose(e)});
    }

    // Функция закрытия при нажатии кнопки ESC
    _handleEscClose(evt) {
        if (evt.key == 'Escape') {
            this.close();
        }
    }

    //Функция закрытия по оверлэю
    _handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        }
    }

    
    //Добавляем слушатель событий
    setEventListeners() {
        this._popupCloseButton.addEventListener('click', () => {this.close()});
        this._popup.addEventListener('click', (evt) => { this._handleOverlayClose(evt)});
    }
}