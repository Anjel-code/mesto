export class Card {

    constructor(data, cardSelector, handleCardClick) {
        this.name = data.name;
        this.link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }


    _getCardData() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        this._photo = cardElement.querySelector(".element__image-click");
        this._like = cardElement.querySelector('.element__like')
        this._image = cardElement.querySelector('.element__image');
        this._removeButton = cardElement.querySelector('.element__delete-button');
        this._elementName = cardElement.querySelector('.element__name');

        return cardElement
    }

    createCard() {
        this._card = this._getCardData();
        this._setEventListeners();
        
        this._image.src = this.link;
        this._image.alt = this.name;
        this._elementName.textContent = this.name;

        return this._card;
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

        this._photo.addEventListener("click", () => {
            this._handleCardClick(this)
        });
    }

}
