var photos = {
  _visible: true,
  _rover: "",
  _values: [],

  set values(values) {
    this._values = values;
    this.renderPhotos();
  },

  renderPhotos() {},
};

const setPhotosEventHandler = () => {
    const overlay = document.querySelector('.photos__overlay');
    const photosSection = document.querySelector('#photos');

    overlay.addEventListener("click", () => {
      photosSection.style.display = 'none';
  });
};

export { photos, setPhotosEventHandler };
