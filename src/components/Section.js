export class Section {
    constructor(renderer, containerSelector) {
        this.renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    rendererItems(items) {
        items.forEach((item) => {
            this.addItem(this.renderer(item));
            return item;
        });
    }
    
    addItem(element) {
       this._container.prepend(element);
    }
}