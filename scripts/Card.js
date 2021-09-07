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

const imagePopup = document.querySelector('.popup__image');
const imagePopupElementTitle = document.querySelector('.popup__image_title');
const imagePopupElementImage = document.querySelector('.popup__image_element');

export class Card {

    constructor(data, cardSelector) {
        this._description = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getCardData() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardElement
    }

    createCard() {
        this._card = this._getCardData();
        this._setEventListeners();

        this._card.querySelector('.element__image').src = this._link;
        this._card.querySelector('.element__image').alt = this._description;
        this._card.querySelector('.element__name').textContent = this._description;

        return this._card;
    }

    _openPopupImage() {
        imagePopupElementTitle.textContent = this._description;
        imagePopupElementImage.src = this._link;
        imagePopup.classList.add('popup_opened');
    }

    _handleLikeCard() {
        this._card.querySelector('.element__like').classList.toggle('element__liked');
    }

    _deletePopupCardForm() {
        this._card.remove();
    }

    _setEventListeners() {
        this._card.querySelector('.element__like').addEventListener('click', () => {
            this._handleLikeCard();
        });

        this._card.querySelector('.element__delete-button').addEventListener('click', () => {
            this._deletePopupCardForm();
        });

        this._card.querySelector('.element__image').addEventListener('click', () => {
            this._openPopupImage()
        });
    }

}

initialCards.forEach((item) => {
    const card = new Card(item, '.card-default');
    const cardElement = card.createCard();
    document.querySelector('.elements__container').prepend(cardElement);
});