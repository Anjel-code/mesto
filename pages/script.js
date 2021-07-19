let editButton = document.querySelector('.profile__button-edit');
let closeButton = document.querySelector('.popup__close-icon');
let popup = document.querySelector('.popup');

function formEdit() {
    popup.classList.add('popup_opened');
}

function formClose() {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', formEdit);
closeButton.addEventListener('click', formClose);

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');

function formSubmitHandler (evt) {
    evt.preventDefault();

    nameInput.value =  document.querySelector('.popup__name').value;
    jobInput.value = document.querySelector('.popup__job').value;

    let nameProfile = document.querySelector('.profile__name');
    let jobProfile = document.querySelector('.profile__job');

    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);