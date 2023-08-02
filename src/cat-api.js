import axios from "axios";
const BASE_URL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common["x-api-key"] = "live_ovszj7lWYxeV3KftLBnEE4ByIkdCvSjwlnWzAVvGLn0Mi8aXftT3udNvA6XurFkN";

//const API_KEY = "live_ovszj7lWYxeV3KftLBnEE4ByIkdCvSjwlnWzAVvGLn0Mi8aXftT3udNvA6XurFkN";

export function fetchBreeds() {
    const ENDPOIND = '/breeds';

    return axios.get(`${BASE_URL}${ENDPOIND}`)
    .then(response => response.data);

    // return fetch(`${BASE_URL}${ENDPOIND}?api_key=${API_KEY}`)
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error(response.statusText);
    //     }
    //     return response.json();
    // });
};

export function fetchCatByBreed(breedId) {
    const ENDPOIND = '/images/search';

    return axios
    .get(`${BASE_URL}${ENDPOIND}?breed_ids=${breedId}`)
    .then(response => {
        return response.data;
    })
    // return fetch(`${BASE_URL}${ENDPOIND}?api_key=${API_KEY}&breed_ids=${breedId}`)
    // .then(response => {
    //     if(!response.ok) {
    //         throw new Error(response.statusText);
    //     }
    //     return response.json();
    // });
};

