var activeFilter = document.querySelector('#filterAll');

export const setFiltersEventHandlers = (rovers) => {
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
}