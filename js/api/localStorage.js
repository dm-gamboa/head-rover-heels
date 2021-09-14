const getSavedStatus = () => {
    const savedStatus = localStorage.getItem('roverStatus');
    return savedStatus ? JSON.parse(savedStatus) : {};
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

export { getSavedStatus, saveStatus };