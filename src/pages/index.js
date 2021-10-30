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
  profileInputName, profileInputJob, profileSelectors
} from "../utils/constants.js"
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

//Classes

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-28',
  headers: '56e4c833-591d-4990-9d0a-38f57698d34e'
});

const initialCardsList = new Section({

  renderer: (item, userData) => {
    initialCardsList.setItem(createCard({
      name: item.name,
      link: item.link,
      likesCounter: item.likes.length,
      likes: item.likes,
      handleDeleteClick: handleDeleteClick,
      handleLikeCard: handleLikeToogle,
      owner: false,
      ownerId: userData._id,
      cardOwnerId: item.owner._id,
      _id: item._id
    }));
  }

}, cardContainer);


Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {

    profileEdit.setUserAvatar(userData.avatar);
    profileEdit.setUserInfo({
      name: userData.name,
      job: userData.about
    });

    initialCardsList.renderItems(cardsData, userData);
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
    .then(() => {
      card.removeCard();
      popupDeleteCard.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

const handleOpenAvatarPopup = (inputValues) => {
  popupAvatarFormButton.textContent = 'Сохранение...';

  api.setAvatar(inputValues.link)
    .then(() => {
      profileEdit.setUserAvatar(inputValues.link);
      popupSetAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAvatarFormButton.textContent = 'Сохранить'
    });
}

const handleDeleteClick = (card, cardId) => {
  popupDeleteCard.open(card, cardId);
};

const handleLikeToogle = (id, card) => {
  let isLiked = true

  if (card.isLiked(isLiked)) {
    api.removeLike(id)
      .then(result => {
        card.setLike(result.likes.length, card.isLiked(isLiked));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  else {
    api.addLike(id)
      .then(result => {
        card.setLike(result.likes.length, card.isLiked(isLiked));
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
      popupEditProfile.close();
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


  Promise.all([api.getUserInfo(), api.addCard({ name: inputValues.name, link: inputValues.link })])
    .then(([userData, cardData]) => {

      initialCardsList.setItem(createCard({
        name: cardData.name,
        link: cardData.link,
        likesCounter: cardData.likes.length,
        likes: cardData.likes,
        handleDeleteClick: handleDeleteClick,
        handleLikeCard: handleLikeToogle,
        owner: true,
        ownerId: userData._id,
        cardOwnerId: cardData.owner._id,
        _id: cardData._id
      })
      )
      popupAddCard.close()
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