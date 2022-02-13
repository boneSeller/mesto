// включение валидации вызовом enableValidation
// все настройки передаются при вызове


const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  };


  const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  }
  
  const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
  }
  

 
 const isValid = (formElement, inputElement, config) => { 
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage , config);
     } 
     else {
      hideInputError(formElement, inputElement, config);
     }
 } 


 const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button_disabled');
  } else {
    buttonElement.classList.remove('popup__button_disabled');
  }
}

const enableValidation = (object) => {
  const formList = Array.from(document.querySelectorAll(object.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })

    setEventListener(formElement, object);
  }) 
}

 const setEventListener = (formElement, config) => {
   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
   const buttonElement = formElement.querySelector(config.submitButtonSelector)
   inputList.forEach((inputElement) => {
     inputElement.addEventListener('input', () => {
       isValid(formElement, inputElement, config)
       toggleButtonState(inputList, buttonElement);
     })

   })
 }



enableValidation(formValidationConfig);

 
