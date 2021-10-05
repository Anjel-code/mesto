import  Popup  from "./Popup.js";

export class PopupWithImage extends Popup {
  open(data) {
    const popupPhoto = this.popupSelector.querySelector(".popup-image__element");
    popupPhoto.src = data.src;
    popupPhoto.alt = data.alt;
    this.popupSelector.querySelector(".popup-image__title").textContent = data.caption;
    super.open();
  }
}