import { setFiltersEventHandlers } from './filters.js';
import { loader } from './loader.js';
import { setPhotosEventHandler } from './photos.js';
import { rovers } from './rovers.js';
import { initializeCarousels } from './carousels.js';
import { getAllRovers } from './api/getRoverInfo.js';
import { loadStatus } from './api/localStorage.js';

const initialRender = async () => {
    loader.value = true;
    const data = await getAllRovers();
    rovers.all = loadStatus(data);
    setFiltersEventHandlers(rovers);
    setPhotosEventHandler();
    initializeCarousels();
    loader.value = false;
}

initialRender();
