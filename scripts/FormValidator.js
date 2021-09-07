const obj  = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const popupAddForm = document.querySelector('.popup__form-add');
const popupEditForm = document.querySelector('.popup__form-edit');

const validateForm = [popupAddForm, popupEditForm];

class FormValidator {
  constructor(data, formElement) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitBtnSelector = data.submitButtonSelector;
    this._inactiveBtnClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._formElement = formElement;
  }

    _showErrorMessage(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
}

    _hideErrorMessage(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
};

    _determineValidity(inputElement) {
    if (!inputElement.validity.valid) {
        this._showErrorMessage(inputElement, inputElement.validationMessage);
    }
    else {
        this._hideErrorMessage(inputElement);
    }
}

    _hasInvalidInput(inputList) {
    return inputList.some(inputElement => {
        return !inputElement.validity.valid;
    })
}

    _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
        buttonElement.setAttribute("disabled", true);
        buttonElement.classList.add(this._inactiveBtnClass);
    }
    else {
        buttonElement.removeAttribute('disabled', true);
        buttonElement.classList.remove(this._inactiveBtnClass);
    }
}

    _setInputListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitBtnSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            this._determineValidity(inputElement);
            this._toggleButtonState(inputList, buttonElement);
        });
    });
}

    enableValidation() {
      this._formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
    });

    this._setInputListeners();
  }
}

validateForm.forEach(element => {
    const validateElement = new FormValidator(obj, element);
    validateElement.enableValidation()
});