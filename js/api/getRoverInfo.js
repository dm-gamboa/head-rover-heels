import { ROVER_NAMES, BASE_URL } from '../constant.js';

const mapRoverInfo = (info) => {
    return {
        name: info.name.toLowerCase(),
        status: 'Active',
        launchDate: new Date(info.launch_date),
        landingDate: new Date(info.landing_date),
        totalPhotos: info.total_photos,
        lastSeen: new Date(info.max_date),
        liked: false,
        disliked: false,
    };
}

export const getRoverInfo = (rover) => {
    return axios
        .get(`${BASE_URL}/manifests/${rover}`)
        .then(response => {
            const { data: { photo_manifest } } = response;
            return mapRoverInfo(photo_manifest);
        })
        .catch(e => console.error(e));
}

export const getAllRovers = () => {
    return Promise.all(ROVER_NAMES.map(
        async (rover) => {
            const roverInfo = await getRoverInfo(rover);
            return roverInfo;
        }
    ));
}