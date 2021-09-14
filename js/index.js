import { setFilters } from './filters.js';
import { loader } from './loader.js';
import { rovers } from './rovers.js';
import { getAllRovers } from './api/getRoverInfo.js';
import { loadStatus } from './api/localStorage.js';

new Swiper('#roversContent', {
    slidesPerView: 'auto'
});

const initialRender = async () => {
    // TO DO: Retrieve data from API
    loader.value = true;
    setFilters(loader.value);
    const data = await getAllRovers();
    rovers.all = loadStatus(data);
    loader.value = false;
}

initialRender();
