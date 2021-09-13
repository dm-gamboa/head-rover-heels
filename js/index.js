const rovers = ['Curiosity', 'Opportunity', 'Spirit', 'Perseverance'];

let loading = false;
let activeFilter = document.querySelector('#filterAll');

const filters = document.querySelectorAll('.tabs__tab').forEach(tab => 
    tab.addEventListener('click', () => {
        if (tab !== activeFilter) {
            activeFilter.classList.remove('active');
            tab.classList.add('active');
            activeFilter = tab;
        }
    })    
);

const cardSwiper = new Swiper('#roversContent', {
    spaceBetween: 30,
    slidesPerView: 'auto'
});