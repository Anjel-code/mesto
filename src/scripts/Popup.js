export default class Popup {
    constructor(popupSelector) {
        this.popupSelector = document.querySelector(popupSelector);
        this.escClose = this._handleEscClose.bind(this);
    }

    open() {
        this.popupSelector.classList.add('popup_opened');
        document.addEventListener("keydown", this.escClose);
    }

    close() {
        this.popupSelector.classList.remove('popup_opened');
        document.removeEventListener("keydown", this.escClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close(this.popupSelector);
        }
    }

    setEventListeners() {
        this.popupSelector.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup__overlay')) {
                this.close(this.popupSelector);
            }
            if (evt.target.classList.contains('popup__close-icon')) {
                this.close(this.popupSelector);
            }
        })
    }

}