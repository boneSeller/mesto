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

class FormValidator {
        constructor(settings, form) {
            this._form = form;
            this._settings = settings;

            this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
            this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
        }

        _showInputError = (inputElement, errorMessage) => {
            const {errorClass, inputErrorClass} = this._settings;
            const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
            inputElement.classList.add(inputErrorClass);
            errorElement.textContent = errorMessage;
            errorElement.classList.add(errorClass);
        }

        _hideInputError = (inputElement) => {
            const {errorClass, inputErrorClass} = this._settings;

            const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
            inputElement.classList.remove(inputErrorClass);
            errorElement.classList.remove(errorClass);
            errorElement.textContent = '';
        }

        _isValid = (inputElement) => {
            if (!inputElement.validity.valid) {
                this._showInputError(inputElement, inputElement.validationMessage);
            } else {
                this._hideInputError(inputElement);
            }
        }

        _hasInvalidInput = () => {
            return this._inputList.some((inputElement) => {
                return !inputElement.validity.valid;
            });
        }

        _toggleButtonState = () =>  {
            const {inactiveButtonClass} = this._settings
            if (this._hasInvalidInput()) {
                this._buttonElement.classList.add(inactiveButtonClass);
                this._buttonElement.setAttribute('disabled', true);
            } else {
                this._buttonElement.classList.remove(inactiveButtonClass);
                this._buttonElement.removeAttribute('disabled');
            }
        }

        enableValidation() {
            this._form.addEventListener('submit', (evt) => {
                evt.preventDefault();
            })
            this._setEventListener();
        }

        _setEventListener = () => {
            this._inputList.forEach((inputElement) => {
                inputElement.addEventListener('input', () => {
                    this._isValid(inputElement);
                    this._toggleButtonState();
                })
            })
        }
    }

export {FormValidator, formValidationConfig};

/*
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

const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
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
       toggleButtonState(inputList, buttonElement, config);
     })
   })
 }




enableValidation(formValidationConfig);*/

 
