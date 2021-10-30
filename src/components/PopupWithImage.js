import Popup from "./Popup.js";

export class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    this._popupCardImage = this.popup.querySelector(".popup-image__element");
    this._captionImage = this.popup.querySelector(".popup-image__title");
  }

  open(data) {
    this._popupCardImage.src = data.src;
    this._popupCardImage.alt = data.alt;
    this._captionImage.textContent = data.caption;
    super.open();
  }
}