export class Section {
    constructor({items, renderer}, container) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(container);
    }
    renderItems(){
        this._renderedItems.forEach(item => {
          this._renderer(item);
        });
    }

    addItem(e) {
        this._container.prepend(e);
    }

}