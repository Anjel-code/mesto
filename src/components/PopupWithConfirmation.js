import Popup from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector, submitDeleteCard) {
        super(popupSelector);
        this._submitDeleteCard = submitDeleteCard;
        this._buttonDelete = this.popup.querySelector('.popup__accept-delete');
    }

    open(card, cardId) {
        super.open();
        this._card = card;
        this._cardId = cardId;
    }

    setEventListeners() {
        super.setEventListeners();
        this._buttonDelete.addEventListener('click', () => this._submitDeleteCard(this._card, this._cardId));
    }

}