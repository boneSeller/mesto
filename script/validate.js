// включение валидации вызовом enableValidation
// все настройки передаются при вызове


/* enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }); */



  function showError(input) {
    input.classList.add('')
  }
  
  function hideErro(input) {
    input.classlist.remove('');
  }
  
  
  function checkInputValidity(formInput) {
    if (!formInput.validity.valid) {
      showError(formInput);
    }
    else {
      hiderError(formInput);
    }
  }
  
  formProfile.addEventListener('input', () => {
    checkInputValidity(formProfile);
  })
