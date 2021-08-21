const elementTemplate = document.querySelector('#card').content;
const elementContainer = document.querySelector('.elements__container');
const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
const imagePopup = document.querySelector('.popup__image');
const imagePopupElementTitle = document.querySelector('.popup__image_title');
const imagePopupElementImage = document.querySelector('.popup__image_element');
const elements = document.querySelector('.elements');
const cardLike = elements.querySelectorAll('.element__like');
const popupEditProfile = document.querySelector('.popup__edit');
const popupAddCard = document.querySelector('.popup__add');
const popupEditContainer = popupEditProfile.querySelector('.popup__container');
const popupAddContainer = popupAddCard.querySelector('.popup__container');
const formEditElement = popupEditProfile.querySelector('.popup__form');
const formAddElement = popupAddCard.querySelector('.popup__form');
const profileEditButton = document.querySelector('.profile__button-edit');
const cardAddButton = document.querySelector('.profile__button-add');
const popupEditFormClose = popupEditProfile.querySelector('.edit-close');
const popupAddFormClose = popupAddCard.querySelector('.add-close');
const popupEditFormNameInput = popupEditProfile.querySelector('.popup__input_info_name');
const popupAddFormTitleInput = popupAddCard.querySelector('.popup__input_add_title');
const popupEditFormJobInput = popupEditProfile.querySelector('.popup__input_info_job');
const popupAddFormUrlInput = popupAddCard.querySelector('.popup__input_add_link');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupImageCloseButton = document.querySelector('.image-close');


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

function createCard({ name, link }) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const imageCard = cardElement.querySelector('.element__image');
  const imageClickHandler = cardElement.querySelector('.element__image-click');
  imageCard.src = link;
  imageCard.alt = name;
  cardElement.querySelector('.element__name').textContent = name;
  const addCardLike = cardElement.querySelector('.element__like');
  const addTrashCan = cardElement.querySelector('.element__delete-button');
  function liked() {
    addCardLike.classList.toggle('element__liked');
  }
  function deletePopupCardForm() {
    cardElement.remove();
  }

  addCardLike.addEventListener('click', liked);
  addTrashCan.addEventListener('click', deletePopupCardForm);
  imageClickHandler.addEventListener('click', () => openPopupInitialImage(name, link))
  return cardElement
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === "Escape") {
      closePopup(popup)
    }
  });

  popup.querySelector(`.${popup.id}-overlay`).addEventListener('click', () => closePopup(popup));
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');

  if (popup.classList.contains('popup__add')) {
    const popupForm = popup.querySelector('.popup__form');
    popupForm.reset();
  }
}

function openPopupInitialImage(name, link) {
  imagePopupElementTitle.textContent = name;
  imagePopupElementImage.src = link;
  openPopup(imagePopup);
}

initialCards.forEach(card => {
  const elementCard = createCard(card);
  elementContainer.append(elementCard);
});

function sumbitFormEditProfile(evt) {
  evt.preventDefault();

  profileName.textContent = popupEditFormNameInput.value;
  profileJob.textContent = popupEditFormJobInput.value;
  closePopup(popupEditProfile);
}

function openPopupImage() {
  imagePopupElementTitle.textContent = cardElement.querySelector('.element__name').textContent;
  imagePopupElementImage.src = cardElement.querySelector('.element__image').src;
  openPopup(imagePopup);
}

function handleFormAddCard(evt) {
  evt.preventDefault();
  const name = evt.target.querySelector('.popup__input_add_title').value;
  const link = evt.target.querySelector('.popup__input_add_link').value;
  const cardElement = createCard({ name, link })
  elementContainer.prepend(cardElement);
  closePopup(popupAddCard);
}

profileEditButton.addEventListener('click', () => openPopup(popupEditProfile));
cardAddButton.addEventListener('click', () => openPopup(popupAddCard));
popupEditFormClose.addEventListener('click', () => closePopup(popupEditProfile));
popupAddFormClose.addEventListener('click', () => closePopup(popupAddCard));
formEditElement.addEventListener('submit', sumbitFormEditProfile);
formAddElement.addEventListener('submit', handleFormAddCard);
popupImageCloseButton.addEventListener('click', () => closePopup(imagePopup));