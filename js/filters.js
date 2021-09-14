var activeFilter = document.querySelector('#filterAll');

export const setFilters = (loading) => {
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
}