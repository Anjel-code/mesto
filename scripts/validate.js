function showErrorMessage(formElement, inputElement, errorMessage, obj) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(obj.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(obj.errorClass);
}

function hideErrorMessage (formElement, inputElement, obj) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(obj.inputErrorClass);
    errorElement.classList.remove(obj.errorClass);
    errorElement.textContent = '';
};

function determineValidity(formElement, inputElement, obj) {
    if (!inputElement.validity.valid) {
        showErrorMessage(formElement, inputElement, inputElement.validationMessage, obj);
    }
    else {
        hideErrorMessage(formElement, inputElement, obj);
    }
}

function hasInvalidInput(inputList) {
    return inputList.some(inputElement => {
        return !inputElement.validity.valid;
    })
}

function toggleButtonState(inputList, buttonElement, obj) {
    if (hasInvalidInput(inputList)) {
        buttonElement.setAttribute("disabled", true);
        buttonElement.classList.add(obj.inactiveButtonClass);
    }
    else {
        buttonElement.removeAttribute('disabled', true);
        buttonElement.classList.remove(obj.inactiveButtonClass);
    }
}

function setInputListeners(formElement, obj) {
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    const buttonElement = formElement.querySelector(obj.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, obj);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            determineValidity(formElement, inputElement, obj);
            toggleButtonState(inputList, buttonElement, obj);
        });
    });
}

function enableValidation(obj) {
    document.querySelectorAll(obj.formSelector).forEach(formElement => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });

        setInputListeners(formElement, obj);

    });
}

enableValidation ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
})