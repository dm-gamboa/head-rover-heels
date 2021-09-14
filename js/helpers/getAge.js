export const getAge = (date) => {
    return Math.floor((Date.now() - date) / (1000 * 3600 * 24 * 365)); // in years
}