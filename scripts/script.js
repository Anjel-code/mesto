const elementTemplate = document.querySelector('#card').content;
const elementContainer = document.querySelector('.elements__container');
let cardElement = elementTemplate.querySelector('.element').cloneNode(true);
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

  function createCard({name, link}) {
    const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
    const imageCard = cardElement.querySelector('.element__image');
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
   return cardElement
}


initialCards.forEach(card => {
  const elementCard = createCard(card); // потому что card это {name, link}
  elementContainer.append(elementCard);

  const imageClickHandler = elementCard.querySelector('.element__image-click');

  function openPopupInitialImage() {
    imagePopupElementTitle.textContent = card.name;
    imagePopupElementImage.src = card.link;
    imagePopup.classList.add('popup_opened');
   }

   imageClickHandler.addEventListener('click', openPopupInitialImage);
});


function openPopupEditForm() {
  popupEditProfile.classList.add('popup_opened');
}

function openPopupAddForm() {
  popupAddCard.classList.add('popup_opened');
}


function closePopupEditForm() {
  popupEditProfile.classList.remove('popup_opened');
}

function closePopupAddForm() {
  popupAddCard.classList.remove('popup_opened');
}

function sumbitFormEditProfile (evt) {
  evt.preventDefault();

  profileName.textContent = popupEditFormNameInput.value;
  profileJob.textContent = popupEditFormJobInput.value;
  closePopupEditForm();
}

function closeImage() {
  imagePopup.classList.remove('popup_opened');
}

function openPopupImage() {
  imagePopupElementTitle.textContent = cardElement.querySelector('.element__name').textContent;
  imagePopupElementImage.src = cardElement.querySelector('.element__image').src;
  imagePopup.classList.add('popup_opened');
 }

function handleFormAddCard (evt) {
  evt.preventDefault();
 
  cardElement.querySelector('.element__name').textContent = popupAddFormTitleInput.value; 
  cardElement.querySelector('.element__image').src = popupAddFormUrlInput.value;

  const imageClickHandler = cardElement.querySelector('.element__image-click');
  
  imageClickHandler.addEventListener('click', openPopupImage);

  elementContainer.prepend(cardElement);
  const addCardLike = cardElement.querySelector('.element__like'); 
  const addTrashCan = cardElement.querySelector('.element__delete-button'); 
  
  function liked() { 
    addCardLike.classList.toggle('element__liked'); 
  } 
 
  function deletePopupCardForm() { 
    let card = addTrashCan.closest('.element'); 
     card.remove(); 
  }

  addCardLike.addEventListener('click', liked); 
  addTrashCan.addEventListener('click', deletePopupCardForm); 
  closePopupAddForm();
}


function editProfileForm() {
  openPopupEditForm();
  popupEditFormNameInput.value = profileName.textContent;
  popupEditFormJobInput.value = profileJob.textContent;
}

function addCardForm() {
  openPopupAddForm();
  popupAddFormTitleInput.placeholder = 'Название';
  popupAddFormUrlInput.placeholder = 'Ссылка на картинку';
}

profileEditButton.addEventListener('click', editProfileForm);
cardAddButton.addEventListener('click', addCardForm);
popupEditFormClose.addEventListener('click', closePopupEditForm);
popupAddFormClose.addEventListener('click', closePopupAddForm);
formEditElement.addEventListener('submit', sumbitFormEditProfile);
formAddElement.addEventListener('submit', handleFormAddCard);
popupImageCloseButton.addEventListener('click', closeImage);