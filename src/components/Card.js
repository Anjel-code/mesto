export class Card {

    constructor(data, cardSelector, handleCardClick) {
        this.name = data.name;
        this.link = data.link;
        this.countLikes = data.likes;
        this._handleLikeCard = data.handleLikeCard;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = data.handleDeleteClick;
        this._isOwner = data.owner
        this._Id = data._id;
    }


    _getCardData() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        this._photo = cardElement.querySelector(".element__image-click");
        this._like = cardElement.querySelector('.element__like');
        this._image = cardElement.querySelector('.element__image');
        this._removeButton = cardElement.querySelector('.element__delete-button');
        this._elementName = cardElement.querySelector('.element__name');

        return cardElement
    }

    createCard() {
        this._card = this._getCardData();
        this._setEventListeners();

        this._card.querySelector(".element__like-counter").textContent = this.countLikes;
        this._image.src = this.link;
        this._image.alt = this.name;
        this._elementName.textContent = this.name;

        return this._card;
    }

    _setEventListeners() {
        this._like.addEventListener('click', () => this._handleLikeCard(this._Id, this._card));

        this._removeButton.addEventListener('click', () => {
            this._handleDeleteClick();
        });

        this._photo.addEventListener("click", () => {
            this._handleCardClick(this);
        });

        if (this._isOwner) {
            this._buttonDelete = this._card.querySelector(".element__delete-button");
            this._buttonDelete.classList.add("element__delete-button_active");
            this._buttonDelete.addEventListener("click", () => {this._handleDeleteClick(this._card, this._Id)});
        }
    }

}
