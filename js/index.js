import './rovers.js';
import { rovers } from './rovers.js';
import { data } from './api/mock.js';

var loading = false;
var activeFilter = document.querySelector('#filterAll');

rovers.all = data;
new Swiper('#roversContent', {
    slidesPerView: 'auto'
});

document.querySelectorAll('.tabs__tab').forEach(tab => 
    tab.addEventListener('click', () => {
        if (tab !== activeFilter) {
            activeFilter.classList.remove('active');
            tab.classList.add('active');
            activeFilter = tab;
            rovers.filter = tab.getAttribute('data-filter');
        }
    })    
);
