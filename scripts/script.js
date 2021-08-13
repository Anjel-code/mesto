const elementTemplate = document.querySelector('#card').content;
const elementContainer = document.querySelector('.elements__container');
let cardElement = elementTemplate.querySelector('.element').cloneNode(true);

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

const elements = document.querySelector('.elements');
const element = elements.querySelectorAll('.element');
const cardLike = elements.querySelectorAll('.element__like');


cardLike.forEach( function like(cardLike) {

  function liked() {
    cardLike.classList.toggle('element__liked');
  }

  cardLike.addEventListener('click', liked);
});

const trashCan = elements.querySelectorAll('.element__delete-button');

trashCan.forEach( function (trashCan) {

  function cardDelete() {
    let card = trashCan.closest('.element');
    card.remove();
  } 

  trashCan.addEventListener('click', cardDelete);
});


const popupEdit = document.querySelector('.popup__edit');
const popupAdd = document.querySelector('.popup__add');
const popupEditContainer = popupEdit.querySelector('.popup__container');
const popupAddContainer = popupAdd.querySelector('.popup__container');
const formEditElement = popupEdit.querySelector('.popup__form');
const formAddElement = popupAdd.querySelector('.popup__form');
const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.profile__button-add');
const editClose = popupEdit.querySelector('.edit-close');
const addClose = popupAdd.querySelector('.add-close');
const nameInput = popupEdit.querySelector('.popup__input_info_name');
const titleInput = popupAdd.querySelector('.popup__input_add_title');
const jobInput = popupEdit.querySelector('.popup__input_info_job');
const urlInput = popupAdd.querySelector('.popup__input_add_link');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

function editFormOpen() {
  popupEdit.classList.add('popup_opened');
}

function addFormOpen() {
  popupAdd.classList.add('popup_opened');
}

function editFormClose() {
  popupEdit.classList.remove('popup_opened');
}

function addFormClose() {
  popupAdd.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  editFormClose();
}

function cardAddHandler (evt) {
  evt.preventDefault();

  cardElement.querySelector('.element__name').textContent = titleInput.value;
  cardElement.querySelector('.element__image').src = urlInput.value;
  elementContainer.prepend(cardElement);
  const addCardLike = cardElement.querySelector('.element__like');
  const addTrashCan = cardElement.querySelector('.element__delete-button');
  function liked() {
    addCardLike.classList.toggle('element__liked');
  }

  function addCardDelete() {
    let card = addTrashCan.closest('.element');
     card.remove();
  } 
  
  cardElement = elementTemplate.querySelector('.element').cloneNode(true);

  addCardLike.addEventListener('click', liked);
  addTrashCan.addEventListener('click', addCardDelete);
  addFormClose();
}


function formEdit() {
  editFormOpen();
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function formAdd() {
  addFormOpen();
  titleInput.placeholder = 'Название';
  urlInput.placeholder = 'Ссылка на картинку';
}

editButton.addEventListener('click', formEdit);
addButton.addEventListener('click', formAdd);
editClose.addEventListener('click', editFormClose);
addClose.addEventListener('click', addFormClose);
formEditElement.addEventListener('submit', formSubmitHandler);
formAddElement.addEventListener('submit', cardAddHandler);

const imagesClickHandler = document.querySelectorAll('.element__image-click');
const image = document.querySelectorAll('.element__image');
const imagePopup = document.querySelector('.popup__image');
const popupImage = document.querySelector('.popup__image_element');


imagesClickHandler.forEach(function (imagesClickHandler) {
  function imagePopupOpen () {
    imagePopup.classList.add('popup_opened');
  }

  imagesClickHandler.addEventListener('click', imagePopupOpen);
});


image.forEach(function (image) {
  function imageLink() {
    popupImage.src = image.src;
    console.log(image.src)
  }

  image.addEventListener('click', imageLink);
});

const imageCloseIcon = document.querySelector('.image-close');

function imageClose() {
  imagePopup.classList.remove('popup_opened');
}

imageCloseIcon.addEventListener('click', imageClose);