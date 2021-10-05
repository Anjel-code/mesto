import { Card } from "./Card.js"
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
import '../pages/index.css';

const obj = {
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

const cardContainer = '.elements__container';
const popupAddForm = document.querySelector('.popup__form-add');
const popupEditForm = document.querySelector('.popup__form-edit');
const cardFormOpenButton = document.querySelector('.profile__button-add');
const editFormOpenButton = document.querySelector('.profile__button-edit');
const profileInputName = document.querySelector(".popup__input_info_name");
const profileInputJob = document.querySelector(".popup__input_info_job");

const handleCardClick = (data) => {
  popupShowCard.open({
    src: data.link,
    alt: data.name,
    caption: data.name
  })
  popupShowCard.setEventListeners();
}

const initialCardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.card-default', handleCardClick);
    const cardElement = card.createCard();
    initialCardsList.setItem(cardElement);
  }
}, cardContainer);

const popupShowCard = new PopupWithImage(".popup-image");

initialCardsList.renderItems();

const cardFormValidate = new FormValidator(obj, popupAddForm);
const profileFormValidate = new FormValidator(obj, popupEditForm);
cardFormValidate.enableValidation();
profileFormValidate.enableValidation();

const profileSelectors = {
  profileName: ".profile__name",
  profileJob: ".profile__job"
};

const profileEdit = new UserInfo(profileSelectors);

const handleFormEditProfile = (inputValues) => {

  profileEdit.setUserInfo(inputValues);

}

const handleFormAddCard = (inputValues) => {
  const CardAddList = new Section({
    items: [inputValues],
    renderer: (item) => {
      const card = new Card(item, '.card-default', handleCardClick);
      const cardElement = card.createCard();
      CardAddList.setItem(cardElement);
    }
  }, cardContainer);

  CardAddList.renderItems();
  cardFormValidate.resetValidation();
}

const popupAddCard = new PopupWithForm(".popup-add", handleFormAddCard)
const popupEditProfile = new PopupWithForm(".popup-edit", handleFormEditProfile)

popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();

cardFormOpenButton.addEventListener('click', () => {
  popupAddCard.open()
})

editFormOpenButton.addEventListener('click', () => {
  const userData = profileEdit.getUserInfo();
  profileInputName.value = userData.name;
  profileInputJob.value = userData.job;
  profileFormValidate.resetValidation()
  popupEditProfile.open();
})