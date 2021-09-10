import { Card } from "./Card.js"
import { FormValidator } from "./FormValidator.js";

const obj  = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

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

const cardContainer = document.querySelector('.elements__container');
const popupAddForm = document.querySelector('.popup__form-add');
const popupEditForm = document.querySelector('.popup__form-edit');
const popupEditProfile = document.querySelector('.popup-edit');
const popupAddCard = document.querySelector('.popup-add');
const formEditElement = popupEditProfile.querySelector('.popup__form');
const formAddElement = popupAddCard.querySelector('.popup__form');
const profileEditButton = document.querySelector('.profile__button-edit');
const cardAddButton = document.querySelector('.profile__button-add');
const popupEditFormNameInput = popupEditProfile.querySelector('.popup__input_info_name');
const popupEditFormJobInput = popupEditProfile.querySelector('.popup__input_info_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popups = document.querySelectorAll('.popup')
const buttonElement = popupAddForm.querySelector('.popup__button');

function createCard(item) {
  const card = new Card(item, '.card-default');
  const cardElement = card.createCard();
  return cardElement
}

initialCards.forEach((item) => {
  cardContainer.prepend(createCard(item));
});

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__overlay')) {
          closePopup(popup);
      }
      if (evt.target.classList.contains('popup__close-icon')) {
           closePopup(popup);
      }
  })
})

function closePopup(popup) {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', closeByEscape);
}

function sumbitFormEditProfile(evt) {
  evt.preventDefault();

  profileName.textContent = popupEditFormNameInput.value;
  profileJob.textContent = popupEditFormJobInput.value;
  closePopup(popupEditProfile);
}

function disableButton() {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add('popup__button_disabled');
}

function handleFormAddCard(evt) {
  evt.preventDefault();
  const cardData = {
  name: evt.target.querySelector('.popup__input_add_title').value,
  link: evt.target.querySelector('.popup__input_add_link').value
  };
  cardContainer.prepend(createCard(cardData));
  popupAddForm.reset();
  disableButton();
  closePopup(popupAddCard);
}

function validate(formElement) {
  const validateElement = new FormValidator(obj, formElement); 
  validateElement.enableValidation() 
}

validate(popupAddForm);
validate(popupEditForm);

profileEditButton.addEventListener('click', () => openPopup(popupEditProfile));
cardAddButton.addEventListener('click', () => openPopup(popupAddCard));
formEditElement.addEventListener('submit', sumbitFormEditProfile);
formAddElement.addEventListener('submit', handleFormAddCard);