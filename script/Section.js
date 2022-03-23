export class Section {
    constructor({items, renderer}, container) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(container);
    }

    rendererCard() {
        this._items.forEach((item) => {
            
        });
    }

    addItem(e) {
        this._container.prepend(e);
    }

}