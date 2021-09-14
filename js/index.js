import { setFiltersEventHandlers } from './filters.js';
import { loader } from './loader.js';
import { setPhotosEventHandler } from './photos.js';
import { rovers } from './rovers.js';
import { getAllRovers } from './api/getRoverInfo.js';
import { loadStatus } from './api/localStorage.js';

new Swiper('#roversContent', {
    slidesPerView: 'auto'
});

const initialRender = async () => {
    // TO DO: Retrieve data from API
    loader.value = true;
    setFiltersEventHandlers(rovers);
    setPhotosEventHandler();
    const data = await getAllRovers();
    rovers.all = loadStatus(data);
    loader.value = false;
}

initialRender();
