import  Popup  from "./Popup.js";

export class PopupWithImage extends Popup {
  open(data) {
    this._popupCardImage.src = data.src;
    this._popupCardImage.alt = data.alt;
    this._captionImage.textContent = data.caption;
    super.open();
  }
}