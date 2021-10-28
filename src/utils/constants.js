const obj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const cardContainer = '.elements__container';
const popupAddForm = document.querySelector('.popup__form-add');
const popupEditForm = document.querySelector('.popup__form-edit');
const popupAvatarForm = document.querySelector('.popup__form-avatar');
const cardFormOpenButton = document.querySelector('.profile__button-add');
const editFormOpenButton = document.querySelector('.profile__button-edit');
const avatarFormOpenButton = document.querySelector('.profile__avatar-button');
const popupEditFormButton = popupEditForm.querySelector('.popup__submit-button');
const popupAddFormButton = popupAddForm.querySelector('.popup__submit-button');
const popupAvatarFormButton = popupAvatarForm.querySelector('.popup__submit-button');
const profileInputName = document.querySelector(".popup__input_info_name");
const profileInputJob = document.querySelector(".popup__input_info_job");


const profileSelectors = {
  profileName: ".profile__name",
  profileJob: ".profile__job",
  profileAvatar: '.profile__avatar'
};


export {
  obj, cardContainer, popupAddForm, popupEditForm, popupAvatarForm, popupEditFormButton, popupAvatarFormButton, popupAddFormButton, cardFormOpenButton, avatarFormOpenButton,
  editFormOpenButton, profileInputName, profileInputJob, profileSelectors
}