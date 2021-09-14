import { insertText } from "./helpers/insertText.js";

var photos = {
    _visible: true,
    _rover: "",
    _values: [],

    set rover(rover) {
        this._rover = rover;
    },

    set values(values) {
        this._values = values;
        this.updatePhotosTitle();
        this.renderPhotos();
    },

    get rover() {
        return this._rover;
    },

    get values() {
        return this._values;
    },

    updatePhotosTitle() {
        const photosTitle = document.querySelector('#photos .section__header h2');
        photosTitle.innerHTML = '';
        insertText(document, '#photos .section__header h2', `${this._rover}'s Latest Photos`);
    },

    renderPhotos() { },
};

const setPhotosEventHandler = () => {
    const overlay = document.querySelector(".photos__overlay");
    const photosSection = document.querySelector("#photos");

    overlay.addEventListener("click", () => {
        photosSection.style.display = "none";
    });
};

export { photos, setPhotosEventHandler };
