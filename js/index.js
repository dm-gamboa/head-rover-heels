import './rovers.js';
import { rovers } from './rovers.js';
import { getSavedStatus, saveStatus } from './api/localStorage.js';
import { data } from './api/mock.js';

var loading = false;
var activeFilter = document.querySelector('#filterAll');

new Swiper('#roversContent', {
    slidesPerView: 'auto'
});

document.querySelectorAll('.tabs__tab').forEach(tab => 
    tab.addEventListener('click', () => {
        if (tab !== activeFilter && !loading) {
            activeFilter.classList.remove('active');
            tab.classList.add('active');
            activeFilter = tab;
            rovers.filter = tab.getAttribute('data-filter');
        }
    })    
);

const initialRender = () => {
    const savedStatus = getSavedStatus();
    // TO DO: Retrieve data from API
    rovers.all = data.map((rover) => {
        const status = savedStatus[rover.name];
        if (status) {
            rover[status] = true; 
        }
        return rover;
    });
}

initialRender();
