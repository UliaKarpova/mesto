export class Section {
    constructor(renderer, containerSelector, api) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
        this._api = api;
    }

    _rendererItems(items) {
        items.forEach((item) => {
             this._renderer(item);
        });
    }
    
    addPhotoList() {
        const data = this._api.getPhotos();
        data.then((res) => {
            const items = res;
            return this._rendererItems(items);
        }).catch((err) => console.log(err));
    }

    addItem(element) {
       this._container.prepend(element);
    }
}