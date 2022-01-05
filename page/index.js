let popupOpen = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let popupName = document.querySelector('.popup__name');
let popupJob = document.querySelector('.popup__job');
let popupSave = document.querySelector('.popup__save');

    

popupOpen.addEventListener('click', function() {
    popup.classList.add('popup__opened');
}
);


popupClose.addEventListener('click', function() {
    popup.classList.toggle('popup__opened');
}
);

popupSave.addEventListener('click', function addDesc() {
    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__job');
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    popup.classList.toggle('popup__opened');
}
);

