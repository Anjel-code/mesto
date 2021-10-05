export class FormValidator {
    constructor(data, formElement) {
        this._formSelector = data.formSelector;
        this._inputSelector = data.inputSelector;
        this._submitBtnSelector = data.submitButtonSelector;
        this._inactiveBtnClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitBtnSelector);
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

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.setAttribute("disabled", true);
            this._buttonElement.classList.add(this._inactiveBtnClass);
        }
        else {
            this._buttonElement.removeAttribute('disabled', true);
            this._buttonElement.classList.remove(this._inactiveBtnClass);
        }
    }

    _setInputListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._determineValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }

    enableValidation() {
        this._formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });

        this._setInputListeners();
    }

    resetValidation() {
        this._toggleButtonState();
  
        this._inputList.forEach((inputElement) => {
          this._hideErrorMessage(inputElement)
        });
  
      }
}