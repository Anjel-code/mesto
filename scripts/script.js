const elementTemplate = document.querySelector('#card').content;
const elementContainer = document.querySelector('.elements__container');
let cardElement = elementTemplate.querySelector('.element').cloneNode(true);
const editButton = document.querySelector('.profile__button-edit');
const closeButton = document.querySelector('.popup__close-icon');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_info_name');
const jobInput = document.querySelector('.popup__input_info_job');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://images.unsplash.com/photo-1587053362230-eb9a377641ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80'
    }
  ];

for (let i = 0; i < initialCards.length; i += 1) {
    cardElement.querySelector('.element__image').src = initialCards[i].link;
    cardElement.querySelector('.element__name').textContent = initialCards[i].name;
    elementContainer.append(cardElement);
    cardElement = elementTemplate.querySelector('.element').cloneNode(true);
}

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