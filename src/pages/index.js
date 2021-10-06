// imports
import { Card } from "../components/Card";
import { Section } from "../components/Section.js";
import { FormValidator } from "../components/FormValidator";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import './index.css';
import {
  obj, popupAddForm, popupEditForm, initialCards, cardContainer, cardFormOpenButton, editFormOpenButton,
  profileInputName, profileInputJob, profileSelectors
} from "../utils/constants.js"


// functions
const handleCardClick = (data) => {
  popupShowCard.open({
    src: data.link,
    alt: data.name,
    caption: data.name
  })
}

function createCard(item) {
  const card = new Card(item, '.card-default', handleCardClick);
  const cardElement = card.createCard();
  return cardElement
}

const handleFormEditProfile = (inputValues) => {

  profileEdit.setUserInfo(inputValues);

}

const handleFormAddCard = (inputValues) => {

  const inputs = [inputValues];

  initialCardsList.setItem(createCard(inputValues));


  cardFormValidate.resetValidation();

}

//Classes

const initialCardsList = new Section({

  items: initialCards,

  renderer: (item) => {

    initialCardsList.setItem(createCard(item));

  }

}, cardContainer);

const popupShowCard = new PopupWithImage(".popup-image");

const cardFormValidate = new FormValidator(obj, popupAddForm);
const profileFormValidate = new FormValidator(obj, popupEditForm);

const profileEdit = new UserInfo(profileSelectors);
const popupAddCard = new PopupWithForm(".popup-add", handleFormAddCard)
const popupEditProfile = new PopupWithForm(".popup-edit", handleFormEditProfile);




// setEventListeners
popupShowCard.setEventListeners();
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();


// enableValidation
cardFormValidate.enableValidation();
profileFormValidate.enableValidation();


// renderItems
initialCardsList.renderItems();


// addEventListeners
cardFormOpenButton.addEventListener('click', () => {
  popupAddCard.open();
  cardFormValidate.resetValidation();
})

editFormOpenButton.addEventListener('click', () => {
  const userData = profileEdit.getUserInfo();
  profileInputName.value = userData.name;
  profileInputJob.value = userData.job;
  profileFormValidate.resetValidation()
  popupEditProfile.open();
})