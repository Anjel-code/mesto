import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitter) {
    super(popupSelector);
    this._formSubmitter = formSubmitter;
    this._inputs = this.popup.querySelectorAll(".popup__input");
    this._inputValues = {};
    this._popupForm = this.popup.querySelector(".popup__form");
  } 

  _getInputValues() {
    this._inputs.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._formSubmitter(this._getInputValues());
      });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}