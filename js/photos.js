import { capitalizeWords } from './helpers/capitalizeWords.js';
import { insertText } from './helpers/insertText.js';
import { getTemplate } from './helpers/getTemplate.js';

const pathToTemplate = '../common/photo-card.html';
const photoTemplate = await getTemplate(pathToTemplate);

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
        this.renderPhotos(values);
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

    renderPhotos(photos) {
        const photosList = document.querySelector('#photosList');
        photosList.innerHTML = '';
        photos.forEach(photo => {
            const photoSlide = document.importNode(photoTemplate.content, true);
            const formattedDate = new Intl.DateTimeFormat('en-us', {dateStyle: 'medium'}).format(photo.timestamp);
            
            insertText(photoSlide, '.photo-card__text .camera', photo.camera);
            insertText(photoSlide, '.photo-card__text .date', formattedDate);

            const photoImage = photoSlide.querySelector('img');
            photoImage.src = photo.src;
            photoImage.alt = `Nasa's ${capitalizeWords(this._rover)} rover on Mars`;
            photosList.appendChild(photoSlide);
        });
    },
};

const setPhotosEventHandler = () => {
    const overlay = document.querySelector(".photos__overlay");
    const photosSection = document.querySelector("#photos");

    overlay.addEventListener("click", () => {
        photosSection.style.display = "none";
    });
};

export { photos, setPhotosEventHandler };
