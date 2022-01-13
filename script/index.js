const popupOpen = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__user_name');
let jobInput = document.querySelector('.popup__user_job');
const popupSave = document.querySelector('.popup__save');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');   
let formElement = document.querySelector('.popup__form');


function openPopup() {
    nameInput.setAttribute("value", profileName.textContent);
    jobInput.setAttribute("value",  profileJob.textContent);
    popup.classList.add('popup_opened');
}


function closePopup() {
    popup.classList.remove('popup_opened');
}

popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

// Находим форму в DOM// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    
    let nameValue = nameInput.value;
    let jobValue = jobInput.value; 
    // Получите значение полей jobInput и nameInput из свойства value
    profileName.textContent = nameValue;
    profileJob.textContent = jobValue;
    closePopup();
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);


