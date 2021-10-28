export class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    setItem(element) {
        this._container.prepend(element);
    }

    renderItems(cards, userData) {
        cards.forEach(card => {
            this._renderer(card, userData);
        });
    }
}