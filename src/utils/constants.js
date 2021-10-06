import { FormValidator } from "../components/FormValidator";
import { Section } from "../components/Section.js"
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { createCard } from "../pages/index.js";


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

const popupShowCard = new PopupWithImage(".popup-image");

const cardFormValidate = new FormValidator(obj, popupAddForm);
const profileFormValidate = new FormValidator(obj, popupEditForm);


const profileSelectors = {
  profileName: ".profile__name",
  profileJob: ".profile__job"
};

const initialCardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    initialCardsList.setItem(createCard(item));
  }
}, cardContainer);


const handleFormEditProfile = (inputValues) => {

  profileEdit.setUserInfo(inputValues);

}

const handleFormAddCard = (inputValues) => {
  const inputs = [inputValues];
  inputs.forEach((item) => {
    initialCardsList.setItem(createCard(item));
  });

  cardFormValidate.resetValidation();
}

const profileEdit = new UserInfo(profileSelectors);


const popupAddCard = new PopupWithForm(".popup-add", handleFormAddCard)
const popupEditProfile = new PopupWithForm(".popup-edit", handleFormEditProfile);


export {
  obj, initialCards, cardContainer, popupAddForm, initialCardsList, handleFormEditProfile, handleFormAddCard, popupEditForm, cardFormOpenButton, editFormOpenButton, profileInputName, profileInputJob,
  popupShowCard, cardFormValidate, profileFormValidate, profileEdit, popupAddCard, popupEditProfile
}