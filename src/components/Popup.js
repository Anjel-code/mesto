export default class Popup {
    constructor(popupSelector) {
        this.popup = document.querySelector(popupSelector);
        this.escClose = this._handleEscClose.bind(this);
    }

    open() {
        this.popup.classList.add('popup_opened');
        document.addEventListener("keydown", this.escClose);
    }

    close() {
        this.popup.classList.remove('popup_opened');
        document.removeEventListener("keydown", this.escClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this.popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup__overlay')) {
                this.close();
            }
            if (evt.target.classList.contains('popup__close-icon')) {
                this.close();
            }
        })
    }

}