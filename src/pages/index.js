// imports
import { Card } from "../components/Card"
import './index.css';
import {
  cardFormOpenButton, initialCardsList, editFormOpenButton,
  profileInputName, profileInputJob, popupShowCard, cardFormValidate,
  profileFormValidate, profileEdit, popupAddCard, popupEditProfile
} from "../utils/constants.js"


// functions
const handleCardClick = (data) => {
  popupShowCard.open({
    src: data.link,
    alt: data.name,
    caption: data.name
  })
}

export function createCard(item) {
  const card = new Card(item, '.card-default', handleCardClick);
  const cardElement = card.createCard();
  return cardElement
}


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