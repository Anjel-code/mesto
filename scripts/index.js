import { Card } from "./Card.js"
import { FormValidator } from "./FormValidator.js";

const popupEditProfile = document.querySelector('.popup__edit');
const popupAddCard = document.querySelector('.popup__add');
const formEditElement = popupEditProfile.querySelector('.popup__form');
const formAddElement = popupAddCard.querySelector('.popup__form');
const profileEditButton = document.querySelector('.profile__button-edit');
const cardAddButton = document.querySelector('.profile__button-add');
const popupEditFormNameInput = popupEditProfile.querySelector('.popup__input_info_name');
const popupEditFormJobInput = popupEditProfile.querySelector('.popup__input_info_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popups = document.querySelectorAll('.popup')
const popupAddForm = document.querySelector('.popup__form-add');
const buttonElement = popupAddForm.querySelector('.popup__button');

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
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
  const card = new Card(cardData, '.card-default');
  const cardElement = card.createCard()
  document.querySelector('.elements__container').prepend(cardElement);
  popupAddForm.reset();
  disableButton();
  closePopup(popupAddCard);
}

profileEditButton.addEventListener('click', () => openPopup(popupEditProfile));
cardAddButton.addEventListener('click', () => openPopup(popupAddCard));
formEditElement.addEventListener('submit', sumbitFormEditProfile);
formAddElement.addEventListener('submit', handleFormAddCard);