export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('click', closeOverlay);
    document.addEventListener('keydown', closeOverlayByEsc);
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('click', closeOverlay);
    document.removeEventListener('keydown', closeOverlayByEsc);
}

export function closeOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
        const open = document.querySelector('.popup_opened');
        closePopup(open);
    }
}

export function closeOverlayByEsc(evt) {
    if (evt.key == 'Escape') {
        const open = document.querySelector('.popup_opened');
        closePopup(open);
    };
}
