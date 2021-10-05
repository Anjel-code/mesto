import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitter) {
    super(popupSelector);
    this._formSubmitter = formSubmitter;
    this._inputs = this.popupSelector.querySelectorAll(".popup__input");
    this._inputValues = {};
    this.submitButton = this.popupSelector.querySelector(".popup__submit-button");
  } 

  _getInputValues() {
    this._inputs.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this.submitButton.addEventListener("click", (evt) => {
        evt.preventDefault();
        this._formSubmitter(this._getInputValues());
        this.close();
      });
  }

  close() {
    super.close();
    this._inputs.forEach((input) => {
      input.value = "";
    });
  }
}