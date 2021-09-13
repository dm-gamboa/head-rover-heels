export const getRelativeDate = (date) => {
    let difference = (Date.now() - date) / (1000 * 3600 * 24 * 365); // in years

    if (difference > 1) {
        return `${Math.floor(difference)} years ago`;
    }

    difference *= 12; // in months

    if (difference > 1) {
        return `${Math.floor(difference)} months ago`;
    }

    difference *= 28;
    
    if (difference > 1) {
        return `${Math.floor(difference)} days ago`;
    }

    if (difference === 1) {
        return 'yesterday';
    }

    return 'today';
}