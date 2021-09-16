export var loader = {
    _rovers: false,

    set roversLoading(value) {
        this._rovers = value;
        this.displayLoader();
    },

    get roversLoading() {
        return this._rovers;
    },

    displayRoversLoader() {
        const roversLoader = document.querySelector('#roversLoader');
        roversLoader.classList.toggle('loading');
    }
}