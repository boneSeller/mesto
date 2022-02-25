export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('click', closeOverlay);
    document.addEventListener('keydown', closeOverlayByEsc);
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    unblockButton();
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

export const unblockButton = () => {
    const popupButton = document.querySelector('#profileButton');
    const popupErrorName = document.querySelector('.username-error');
    const popupErrorJob = document.querySelector('.userjob-error');
    document.forms.formProfile.elements.username.classList.remove('popup__input_type_error');
    document.forms.formProfile.elements.userjob.classList.remove('popup__input_type_error');
    popupErrorName.classList.remove('popup__error_visible');
    popupErrorJob.classList.remove('popup__error_visible');
    popupButton.classList.remove('popup__button_disabled');
    popupButton.removeAttribute('disabled');
}