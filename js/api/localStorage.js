const getSavedStatus = () => {
    const savedStatus = localStorage.getItem('roverStatus');
    return savedStatus ? JSON.parse(savedStatus) : {};
}

const loadStatus = (data) => {
    const savedStatus = getSavedStatus();

    return data.map((rover) => {
        const status = savedStatus[rover.name];
        if (status) {
            rover[status] = true; 
        }
        return rover;
    });
}

const saveStatus = (rovers) => {
    let status = {};

    for (const rover of rovers) {
        if (rover.liked) {
            status[rover.name] = 'liked';
        }

        if (rover.disliked) {
            status[rover.name] = 'disliked';
        }
    }

    localStorage.setItem('roverStatus', JSON.stringify(status));
}

export { getSavedStatus, loadStatus, saveStatus };