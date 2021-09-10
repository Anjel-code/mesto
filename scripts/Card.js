import { openPopup } from "./index.js";

const imagePopup = document.querySelector('.popup-image');
const imagePopupElementTitle = document.querySelector('.popup-image__title');
const imagePopupElementImage = document.querySelector('.popup-image__element');

export class Card {

    constructor(data, cardSelector) {
        this._description = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._openPopup = openPopup;
    }


    _getCardData() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        this._like = cardElement.querySelector('.element__like')
        this._image = cardElement.querySelector('.element__image');
        this._removeButton = cardElement.querySelector('.element__delete-button');
        this._elementName = cardElement.querySelector('.element__name');

        return cardElement
    }

    createCard() {
        this._card = this._getCardData();
        this._setEventListeners();

        this._image.src = this._link;
        this._image.alt = this._description;
        this._elementName.textContent = this._description;

        return this._card;
    }

    _openPopupImage() {
        this._openPopup(imagePopup);
        imagePopupElementTitle.textContent = this._description;
        imagePopupElementImage.src = this._link;
    }

    _handleLikeCard() {
        this._like.classList.toggle('element__liked');
    }

    _deletePopupCardForm() {
        this._card.remove();
    }

    _setEventListeners() {
        this._like.addEventListener('click', () => {
            this._handleLikeCard();
        });

        this._removeButton.addEventListener('click', () => {
            this._deletePopupCardForm();
        });

        this._image.addEventListener('click', () => {
            this._openPopupImage()
        });
    }

}
