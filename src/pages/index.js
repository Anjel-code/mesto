// imports
import { Card } from "../components/Card";
import { Section } from "../components/Section.js";
import { FormValidator } from "../components/FormValidator";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import './index.css';
import {
  obj, popupAddForm, popupEditForm, popupAvatarForm, popupEditFormButton, popupAvatarFormButton, cardContainer, cardFormOpenButton, editFormOpenButton, popupAddFormButton, avatarFormOpenButton,
  profileInputName, profileInputJob, profileAvatar, profileSelectors
} from "../utils/constants.js"
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

//Classes

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-28',
  headers: '56e4c833-591d-4990-9d0a-38f57698d34e'
});

const initialCardsList = new Section({

  items: [],

  renderer: (item) => {

    initialCardsList.setItem(createCard({
      name: item.name,
      link: item.link,
      likes: item.likes.length,
      handleLikeCard: handleLikeToogle,
      _id: item._id
    }));

  }

}, cardContainer);


api.getInitialCards()
  .then(result => {
    const cards = result
    initialCardsList.renderItems(cards)
  })
  .catch((err) => {
    console.log(err);
  });

const popupShowCard = new PopupWithImage(".popup-image");

const cardFormValidate = new FormValidator(obj, popupAddForm);
const profileFormValidate = new FormValidator(obj, popupEditForm);
const avatarFormValidate = new FormValidator(obj, popupAvatarForm);

const profileEdit = new UserInfo(profileSelectors);


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

const submitDeleteCard = (card, cardId) => {
  api.deleteCard(cardId)
    .catch((err) => {
      console.log(err);
    });
  card.remove();
  popupDeleteCard.close();
}

const handleOpenAvatarPopup = (inputValues) => {
  popupAvatarFormButton.textContent = 'Сохранение...';

  api.setAvatar(inputValues.link)
    .then(data => {
      profileEdit.setUserInfo({
        name: data.name,
        job: data.about
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAvatarFormButton.textContent = 'Сохранить'
    });
  profileAvatar.src = inputValues.link;
}

const handleDeleteClick = (card, cardId) => {
  popupDeleteCard.open(card, cardId);
};

const handleLikeToogle = (id, card) => {
  const like = card.querySelector('.element__like');
  const likeCounter = card.querySelector('.element__like-counter');


  if (like.classList.contains('element__liked')) {
    like.classList.remove("element__liked");
    api.removeLike(id)
      .then(result => {
        likeCounter.textContent = result.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  else {
    like.classList.add("element__liked");
    api.addLike(id)
      .then(result => {
        likeCounter.textContent = result.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const handleFormEditProfile = (inputValues) => {

  popupEditFormButton.textContent = 'Сохранение...'

  api.patchUserInfo({
    name: inputValues.name,
    about: inputValues.job
  })
    .then(data => {
      profileEdit.setUserInfo({
        name: data.name,
        job: data.about
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditFormButton.textContent = 'Сохранить'
    });
}

const handleFormAddCard = (inputValues) => {
  popupAddFormButton.textContent = 'Создание...'

  api.addCard({
    name: inputValues.name,
    link: inputValues.link
  })
    .then(data => {

      initialCardsList.setItem(createCard({
        name: data.name,
        link: data.link,
        likes: data.likes.length,
        handleDeleteClick: handleDeleteClick,
        handleLikeCard: handleLikeToogle,
        owner: true,
        _id: data._id
      })
      )
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddFormButton.textContent = 'Создать'
    });


  cardFormValidate.resetValidation();

}

const popupAddCard = new PopupWithForm(".popup-add", handleFormAddCard)
const popupEditProfile = new PopupWithForm(".popup-edit", handleFormEditProfile);
const popupSetAvatar = new PopupWithForm('.popup-avatar', handleOpenAvatarPopup);
const popupDeleteCard = new PopupWithConfirmation('.popup-delete', submitDeleteCard);


// setEventListeners
popupShowCard.setEventListeners();
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupSetAvatar.setEventListeners();
popupDeleteCard.setEventListeners();


// enableValidation
cardFormValidate.enableValidation();
profileFormValidate.enableValidation();
avatarFormValidate.enableValidation();


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
});

avatarFormOpenButton.addEventListener('click', () => {
  popupSetAvatar.open();
  avatarFormValidate.resetValidation();
})