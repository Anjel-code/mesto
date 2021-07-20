let editButton = document.querySelector('.profile__button-edit');
let closeButton = document.querySelector('.popup__close-icon');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_info_name');
let jobInput = document.querySelector('.popup__input_info_job');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');

function formEdit() {
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

function formClose() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    formClose()

}

editButton.addEventListener('click', formEdit);
closeButton.addEventListener('click', formClose);
formElement.addEventListener('submit', formSubmitHandler);