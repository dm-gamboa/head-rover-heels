export const getRelativeDate = (date) => {
    let difference = (Date.now() - date) / (1000 * 3600 * 24 * 365); // in years
    let roundedDiff = Math.floor(difference);

    if (roundedDiff > 1) {
        return `${roundedDiff} years ago`;
    }

    difference *= 12; // in months
    roundedDiff = Math.floor(difference);

    if (roundedDiff > 1) {
        return `${roundedDiff} months ago`;
    }

    difference *= 28; // in days
    roundedDiff = Math.floor(difference);
    
    if (roundedDiff > 1) {
        return `${roundedDiff} days ago`;
    }

    if (roundedDiff === 1) {
        return 'yesterday';
    }

    return 'today';
}